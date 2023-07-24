import React, {ChangeEvent, useEffect, useState} from 'react'
import axios from 'axios'
import reactSvg from '../react.svg'
import { Room } from './RoomList'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
type filterItem = {
    available?: string
    located?: string
}
const RoomsScreen = () => {
    const { size } = useParams()
    const navigate = useNavigate()
    const { search } = useLocation()
    const sp = new URLSearchParams(search)
    const available = sp.get('available') || 'all'
    const located = sp.get('location') || 'all'
    const [rooms, setRooms] = useState<Room[]>([])
    const [error, setError] = useState<any>(null)
    useEffect(()=>{
        const fetchRooms = async()=>{
            try {
                const {data} : any= await axios.get(`http://localhost:4500/api/rooms/${size}?available=${available}&location=${located}`)
                if (data) {
                    console.log(data)
                    setRooms(data)
                }    
            } catch (error: any) {
                alert(error.response.data.message)
                setError(error.response.data.message)
                // navigate(`/rooms/${size}`)
            }
            
        }
        fetchRooms()
    },[size, available, located])
    const getFilterUrl = (filter : filterItem, skipPathname? : any): string =>{
        const filterAvailability = filter.available || available
        const filterLocation = filter.located || located
        return `${
            skipPathname ? '' : `/rooms/${size}?`
          }available=${filterAvailability}&location=${filterLocation}`
        }
  return (
    <section style={{marginTop:'4rem', minHeight: "85dvh", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100dvw', flexDirection: 'column'}}>
        <div  style={{ margin: '2rem 0', width: '100%',display: 'flex', alignItems:'center', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
            <p style={{color: '#fff', marginRight: '1rem'}}>filter by: </p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                <div>
                    Availability: <select name="availability" id="available" value={available} 
                        onChange={(e: ChangeEvent<HTMLSelectElement>)=> navigate(getFilterUrl({ available: e.target.value}))}>
                        <option value='all'>All</option> 
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                </div>
                <div>
                    Location: <select name="location" id="located" value={located} onChange={(e: ChangeEvent<HTMLSelectElement>)=> navigate(getFilterUrl({ located: e.target.value}))}>
                        <option value={'all'}>All</option>
                        <option value="GRA">GRA</option>
                        <option value="federal low-cost">Usubu</option>
                    </select>
                </div>
            </div>
        </div>
        {error ? <h2>{error}</h2> : (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            {rooms.map(room => <div key={room.id} className={room.availability ? 'card roomss' : 'card roomss availabl'}>
                        <img src={reactSvg} loading='lazy' alt="" style={{ width: '100%', height: '60%'}}  />
                        <div className="services-details" style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center', flexDirection: 'column'}}>
                            <h2 style={{color: 'black'}}>{room.location}</h2>
                            <p style={{color: 'black'}}>Availability: {room.availability ? 'Available' : 'Unavailable'}</p>
                            <p style={{color: 'black'}}>Room Number : {room.number}</p>
                            <p style={{color: 'black'}}>Size: {room.size}</p>
                            <h3 className='price'>Price: NGN{room.price}</h3>
                            <button disabled={room.availability ? false : true} className={room.availability? '' : 'grey-button'} onClick={()=> navigate('/')} >Book room now</button>
                        </div>
                    </div>)}
            </div>

        )}
    </section>
  )
}

export default RoomsScreen