import React from 'react'
import OIP from  '../rooms/OIP.jfif'
import OIP1 from  '../rooms/OIP (1).jfif'
import OIP2 from  '../rooms/OIP (2).jfif'
import OIP3 from  '../rooms/download (1).jfif'
import OIP4 from  '../rooms/download.jfif'
import { Link } from 'react-router-dom'

export type Room ={
    id: number,
    availability: string,
    number: number,
    size: string,
    location: string
}
const RoomListScreen = () => {
  return (
    <section style={{marginTop:'4rem', minHeight: "85dvh", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100dvw'}}>
        <div className="section-title" style={{ marginBottom: '1rem'}}>
            <h2>SELECT <span>ROOM TYPE</span></h2>
        </div>
        <div className="room-list" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0px 2rem', flexWrap:'wrap'}}>
            <Link to={`/rooms/all`} style={{textDecoration: 'none',}}>
                    <div className="card rooms">
                        <img src={OIP1} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: '#000000', fontFamily: 'Montserrat'}}>Extra Small</h4>
                            <div className="category">
                                <div>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Cozy living space, compact layout</p>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Perferct for solo travelers or couples</p>
                                </div>
                                <div>
                                    <p>Features: Air conditioning, television, private bathroom, e.t.c</p>
                                </div>
                                <div>
                                    <h2 className='price'>NGN12000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
            </Link>
            <Link to={`/rooms/x-small`} style={{textDecoration: 'none',}}>
                    <div className="card rooms">
                        <img src={OIP1} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: '#000000', fontFamily: 'Montserrat'}}>Extra Small</h4>
                            <div className="category">
                                <div>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Cozy living space, compact layout</p>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Perferct for solo travelers or couples</p>
                                </div>
                                <div>
                                    <p>Features: Air conditioning, television, private bathroom, e.t.c</p>
                                </div>
                                <div>
                                    <h2 className='price'>NGN12000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
            </Link>
            <Link to={`/rooms/small`} style={{textDecoration: 'none',}}>
                    <div className="card rooms">
                        <img src={OIP1} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: '#000000', fontFamily: 'Montserrat'}}>Small</h4>
                            <div className='category'>
                                <div>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Comfortable living area, seperate bedrooom</p>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Suitable for couples or small families</p>
                                </div>
                                <div>
                                    <p>Features: Air conditioning, television, private bathroom, e.t.c</p>
                                </div>
                                <div>
                                    <h2 className='price'>NGN16000</h2>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Link>
                <Link to={`/rooms/medium`} style={{textDecoration: 'none'}}>
                    <div className="card rooms">
                        <img src={OIP1} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: '#000000', fontFamily: 'Montserrat'}}>Medium</h4>
                            <div className='category'>
                                <div>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Spacious living and dining area, seperate bedroom</p>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Perfect for small families</p>
                                </div>
                                <div>
                                    <p style={{color: 'grey'}}>Features: Air conditioning, television, dining space, private bathroom, e.t.c</p>
                                </div>
                                <div>
                                    <h2 className='price'>N20000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/rooms/large`} style={{textDecoration: 'none',}}>
                    <div className="card rooms">
                        <img src={OIP1} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: '#000000', fontFamily: 'Montserrat'}}>Large</h4>
                            <div className='category'>
                                <div>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Generous living space, multiple bedrooms and bathrooms</p>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Suitable for extended stays</p>
                                </div>
                                <div>
                                    <p>Features: Fully furnished, air conditioning, television, multiple bathrooms, spacious common areas, e.t.c</p>
                                </div>
                                <div>
                                    <h2 className='price'>NGN22000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={`/rooms/x-large`} style={{textDecoration: 'none',}}>
                    <div className="card rooms">
                        <img src={OIP1} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: '#000000', fontFamily: 'Montserrat'}}>Extra Large</h4>
                            <div className="category">
                                <div>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Expansive living space, luxurious furnishings</p>
                                    <p style={{color: '#000000', fontFamily: 'Montserrat'}}>Ideal for large families and groups</p>
                                </div>
                                <div>
                                    <p>Features: Air conditioning, television, multiple bathrooms, seperate living and dining areas, fully equipped kitchen, e.t.c</p>
                                </div>
                                <div>
                                    <h2 className='price'>NGN25000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
        
        </div>
    </section>
  )
}

export default RoomListScreen