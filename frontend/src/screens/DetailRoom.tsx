import axios from 'axios'
import React, {useEffect, useState, useContext} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Room } from './RoomList'
import errorHandle from '../components/errorHandle'
import { Store } from '../Store'
import Spinner from '../components/Spinner'

const DetailRoom = () => {
  const {state} = useContext(Store)
  const {user} = state
  const navigate = useNavigate()
  const {pathname} = useLocation()
  console.log(pathname)
  const {roomId} = useParams()
  const {size} = useParams()
  const [room, setRoom] = useState<null | Room>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>('')
  useEffect(() => {
    const fetchData =async () => {
      try {
        setLoading(true)
        const {data} = await axios.get(`http://localhost:4500/api/rooms/detailroom/${size}/${roomId}`)
        if (data) {
          setRoom(data)
        }
      } catch (error) {
        setError(errorHandle(error))
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [roomId])


  const bookingHandler = async (data: Room) : Promise<void> => {
    if(!user) {
      navigate('/login?redirect=' + pathname)
      return
    }
    try {
      const dataPaystack = await axios.post(`http://localhost:4500/api/payment/initialization`, {
        email: user?.email,
        amount : data.price * 100
        }, {
          headers : {
            Authorization: `Bearer ${user?.token}`
          }
      })
    window.location.href = dataPaystack.data.data.authorization_url
      
    } catch (error) {
      console.log(error)
      alert(errorHandle(error))
    }
    
  }
  return (
    <section style={{marginTop:'4rem', minHeight: "85dvh", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column'}}>
        <div  style={{ margin: '2rem 0', width: '100%',display: 'flex', alignItems:'center', justifyContent: 'center', flexWrap: 'wrap'}}>
          {loading ? <Spinner /> : error ? <div>{error}</div> : room && <div key={room.id} className={room.availability ? 'card roomss' : 'card roomss availabl'}>
                        {/* <img src={} loading='lazy' alt="" style={{ width: '100%', height: '60%'}}  /> */}
                        <div className="services-details" style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center', flexDirection: 'column'}}>
                            <h2 style={{color: 'black'}}>{room.location}</h2>
                            <p style={{color: 'black'}}>Availability: {room.availability ? 'Available' : 'Unavailable'}</p>
                            <p style={{color: 'black'}}>Room Number : {room.number}</p>
                            <p style={{color: 'black'}}>Size: {room.size}</p>
                            <h3 className='price'>Price: NGN{room.price}</h3>
                            <button disabled={room.availability ? false : true} className={room.availability? '' : 'grey-button'} onClick={()=> bookingHandler(room)}>Book room now</button>
                        </div>
                    </div>}
        </div>
    </section>
  )
}

export default DetailRoom