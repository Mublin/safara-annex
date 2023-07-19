import React, {useContext} from 'react'
import reactSvg from '../react.svg'
import { Store } from '../Store'
import hotel from '../pic.jpg'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const {state} = useContext(Store)
    console.log(state)
  return (
    <div>
        <div className="annex-image" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div className="explore" style={{zIndex: 50}}>
                <Link to={'/choose'} className='link-action'><button>Book Us Now</button></Link>
            </div>
            <div className="explore-design"></div>
        </div>
        <div className="annex-details">
            <section className="our-services">
                <h2>Our <span>Services</span></h2>
                <div className="services" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className="card service" style={{maxWidth:  '360px', minHeight: '340px',}}>
                        <img src={reactSvg} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: 'black'}}>Service Header</h4>
                            <p style={{color: 'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                        </div>
                    </div>
                    <div className="card service" style={{maxWidth:  '360px', minHeight: '340px',}}>
                        <img src={reactSvg} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: 'black'}}>Service Header</h4>
                            <p style={{color: 'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                        </div>
                    </div>
                    <div className="card service" style={{maxWidth:  '360px', minHeight: '340px',}}>
                        <img src={reactSvg} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: 'black'}}>Service Header</h4>
                            <p style={{color: 'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                        </div>
                    </div>
                    <div className="card service" style={{maxWidth:  '360px', minHeight: '340px',}}>
                        <img src={reactSvg} loading='lazy' alt="" width='100%' height='100%'  style={{height: '60%', width: '100%'}} />
                        <div className="services-details">
                            <h4 style={{color: 'black'}}>Service Header</h4>
                            <p style={{color: 'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default HomeScreen