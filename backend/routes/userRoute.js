const express = require('express')
const knex = require('knex')
const bcrypt = require('bcrypt')
const { generateToken } = require('../utils')
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
    // console.log(req.body)
    // console.log(generateToken("j"))
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
                console.log(email)
                return res.status(201).send({
                    email,
                    username,
                    name,
                    token: generateToken({
                        name,
                        username,
                        email
                    })
                })
            })
            .then(trx.commit)
            .catch(trx.rollback)
        })
        
    }).catch(err=> res.status(401).send(err))
})




userRoute.post('/signin', async (req, res)=>{
    const {username, password} = req.body;
    try {
        const user = await userdb.select('*').where('username', '=', username)
        console.log(user)
        if (!user.length) {
            // console.log("1")
            return res.status(401).send({message: 'User does not exist'})
        }
        const credentials = await crackdb.select('hash').where('username', '=', username)
        const validation = await bcrypt.compare(password, credentials[0].hash).then(function(result) {
            return result
        })
        if (!validation) {
            return res.status(401).send({message: 'Invalid username or password'})
        }else{

        }
        if (validation) {
            return res.status(200).send({
                name: user[0].name,
                username: user[0].username,
                email: user[0].email,
                token: generateToken({
                    name: user[0].name,
                    username: user[0].username,
                    email: user[0].email
                })
            })   
        }
}catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
})



module.exports = userRoute