import React from 'react'
import { Link } from 'react-router-dom'
import reactSvg from '../react.svg'
import oip2 from  '../rooms/OIP (2).jfif'
import oip3 from  '../rooms/download (1).jfif'
import oip4 from  '../rooms/download.jfif'


const EventScreen = () => {
  return (
    <div style={{marginTop:'4rem', minHeight: "85dvh", width: '100dvw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <h2 style={{margin: '1rem'}}>Choose Your <span>Service</span></h2>
        <div className="items">
                <Link to={'/bookhall'} style={{textDecoration: 'none'}}>
                    <div className="card choose" style={{maxWidth:  '360px', minHeight: '340px',}}>
                        <img src={oip2} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h3 style={{color: 'black'}}>EVENT CENTER BOOKING</h3>
                            <p style={{color: 'black', marginBottom: '1rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                        </div>
                    </div>
                </Link>
            <Link to={'/rooms'}  style={{textDecoration: 'none',}}>
            <div className="card choose" style={{maxWidth:  '360px', minHeight: '340px',}}>
                    <img src={oip3} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                    <div className="services-details">
                        <h3 style={{color: 'black'}}>APARTMENT BOOKING</h3>
                        <p style={{color: 'black', marginBottom: '1rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                    </div>
                </div>
            </Link>
            <Link to={'/others'}  style={{textDecoration: 'none'}}>
            <div className="card choose" style={{maxWidth:  '360px', minHeight: '340px',}}>
                    <img src={oip4} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                    <div className="services-details">
                        <h3 style={{color: 'black'}}>OTHERS</h3>
                        <p style={{color: 'black', marginBottom: '1rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default EventScreen