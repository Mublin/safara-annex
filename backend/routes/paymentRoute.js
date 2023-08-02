const express = require('express')
const { isAuth } = require('../utils')
const https = require('https')


const paymentRoute = express.Router()


paymentRoute.post('/initialization', isAuth, async (req, res)=>{
    const {email, amount} = req.body
    const amountString = "" + amount
    const params = JSON.stringify({
        "email": email,
        "amount": amountString,
        "callback_url": "localhost:5173/payment"
      })
      
      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.payS}`,
          'Content-Type': 'application/json'
        }
      }
      
      const reqPaystack = https.request(options, resPaystack => {
        let data = ''
      
        resPaystack.on('data', (chunk) => {
          data += chunk
        });
      
        resPaystack.on('end', () => {
          res.status(201).send(JSON.parse(data))
          // console.log(JSON.parse(data))
        })
      }).on('error', error => {
          res.status(401).send({message: "Payment Error"})
        // console.error(error)
      })
      
      reqPaystack.write(params)
      reqPaystack.end()
})

paymentRoute.get('/verify', async (req, res)=>{
    const {reference} = req.body
    const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: `/transaction/verify/${reference}`,
    method: 'GET',
    headers: {
        Authorization: `Bearer ${process.env.payS}`
    }
    }

    https.request(options, res => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk
    });

    res.on('end', () => {
        res.status(201).send(JSON.parse(data))
        // console.log(JSON.parse(data))
    })
    }).on('error', error => {
    console.error(error)
    res.status(201).send({message: 'Payment unsuccessfully'})

    })
})






module.exports = paymentRoute