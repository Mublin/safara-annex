import React, { ReactElement, useContext, JSXElementConstructor } from 'react'
import { Store } from '../Store'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: any) => {
    const {state} = useContext(Store)
  return (
    state.user && state.user.username ? children : <Navigate to={'/login'}/>
  )
}

export default ProtectedRoute