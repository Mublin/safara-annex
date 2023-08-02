const express = require('express')
const cors = require('cors')
const dotenv =require('dotenv').config()
const knex = require('knex')
const path = require('path')
const userRoute = require('./routes/userRoute')
const roomRoute = require('./routes/roomRoute')
const paymentRoute = require('./routes/paymentRoute')
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
app.use(express.urlencoded({extended: false}))




app.use(`/api/users`, userRoute)
app.use(`/api/rooms`, roomRoute)
app.use('/api/payment', paymentRoute)

app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.get('*', (req,res)=>
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
)
const port = process.env.PORT || 5773
app.listen(port, ()=>{
    console.log(`app is working at port ${port} siu`)
})
