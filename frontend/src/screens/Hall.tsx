import React from 'react'
import reactSvg from '../react.svg'


const HallScreen = () => {
  return (
    <section style={{marginTop:'4rem', minHeight: "85dvh", display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <div className="card" style={{minWidth:  '295px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100dvw', flexDirection: 'column'}}>
                    <img src={reactSvg} loading='lazy' alt="" width='365px' height='300px' />
                    <div className="services-details" style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center', flexDirection: 'column'}}>
                        <h2 style={{color: 'black'}}>Service Header</h2>
                        <p style={{color: 'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum est sapiente incidunt, tempora odio laudantium consequuntur officiis id error velit. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut voluptatibus veritatis quo, tempora, <br />nam dicta voluptates ratione autem vel unde non doloremque in dolores repellendus sequi magni eveniet suscipit fugit! Repellendus?</p>
                        <button>Book Hall now</button>
                    </div>
                </div>
    </section>
  )
}

export default HallScreen