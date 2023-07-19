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


const roomRoute = express.Router()


roomRoute.get('/:id', async (req, res)=>{
    const {id} = req.params
    const { query} = req;
    const located = query.location || ''
    const available = query.available || ''
    console.log(available)
    console.log(located)
    
    const rooms = db('rooms')
        if (id !== 'all'){
            rooms.where(`size`, `=`, id)
        }


        if (located && located !== 'all') {
            rooms.where('location', located)
        }


        if(available && available !== 'all'){
            if (available === 'available') {
                rooms.where('availability', true)
            } else if (available === 'unavailable'){
                rooms.where('availability', false)
            }
        }


        rooms.then(result=> {
            if (result.length){
                return res.status(200).send(result)
            }
            return res.status(401).send({message: 'No room matches the description'})
        }).catch(error=>{
            return res.status(501).send({message: 'Room not found'})
        })
        
    
    
    // return res.status(401).send({message: 'room not found'})
})


module.exports = roomRoute