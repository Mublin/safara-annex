const express = require('express')
const knex = require('knex')
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

userRoute.get('/', (req, res)=>{
    db('rooms').select('*').then(data=> res.status(201).send(data))
    .catch(err=> res.send(401).send({message: err}))
})


module.exports = userRoute