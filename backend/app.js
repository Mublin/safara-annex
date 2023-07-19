const express = require('express')
const cors = require('cors')
const dotenv =require('dotenv').config()
const knex = require('knex')
const userRoute = require('./routes/userRoute')
const roomRoute = require('./routes/roomRoute')
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '307048',
        database: 'hotel'
    }
})



const app = express()
app.use(cors())
app.use(express.json())


// app.use(`/api/users`, userRoute)
app.use(`/api/rooms`, roomRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`app is working at port ${process.env.PORT}`)
})