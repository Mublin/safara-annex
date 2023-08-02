import React from 'react'

const Spinner = () => {
  return (
    <div style={{width:'100dvw', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="custom-loader"></div>
    </div>
  )
}

export default Spinner