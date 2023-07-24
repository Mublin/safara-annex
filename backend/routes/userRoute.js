const express = require('express')
const knex = require('knex')
const bcrypt = require('bcrypt')
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '307048',
        database: 'hotel'
    }
})


const userRoute = express.Router()
const userdb = db('users')
const crackdb = db('crack')



userRoute.post('/register', async (req, res)=>{
    console.log(req.body)
    const {username, name, email, password} = req.body;
    db.transaction(trx=>{
        trx('users').insert({
            username,
            name,
            email
        }).then(resp =>{
            return trx('crack').insert({
                username,
                email,
                hash: bcrypt.hashSync(password, 10)
            }).then(user =>{
                res.status(201).send({
                    email,
                    username,
                    name
                })
            })
            .then(trx.commit)
            .catch(trx.rollback)
        })
        
    }).catch(err=> res.status(401).send(err))
})




userRoute.post('/signin', (req, res)=>{
    const {username, password} = req.body;
    userdb.select('*').where('username', '=', username)
    .then(data=>{
        if (data.length) {
            crackdb.select('hash').where('username', '=', username)
            .then(dbPassword=>{
                console.log(data)
                if (dbPassword.length) {
                    console.log(dbPassword)
                    bcrypt.compare(password, dbPassword[0].hash).then(function(result) {
                        if (result) {
                            return res.status(200).send({
                                name: data[0].name,
                                username: data[0].username,
                                email: data[0].email
                            })    
                        }
                        return res.status(401).send({message: "Incorrect Password"})
                    });
                }
            })
        }
    })
})



module.exports = userRoute