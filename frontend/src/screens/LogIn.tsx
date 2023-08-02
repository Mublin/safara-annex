import React, { useState, ChangeEvent, MouseEvent, useContext, useEffect } from 'react'
import { Store } from '../Store'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

const LogInScreen = () => {
  const { state, loginHandler} = useContext(Store)
  const {user} = state
  const {search} = useLocation()
  const redirectUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectUrl || '/' 
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const submitHandler = async (e: MouseEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await loginHandler(username.toLowerCase(), password, redirect);
  }
  useEffect(()=>{
    // console.log(state)
    if (state.user) {
      navigate(redirect)
    }
  },[navigate, state.user])
  return (
    <div style={{marginTop:'4rem', minHeight: "85dvh", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100dvw'}}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username"> username:
          <input type="text" value={username} onChange={(e: ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)} />
        </label>
        <label htmlFor="username"> password:
          <input type="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>)=> setPassword  (e.target.value)} />
        </label>
        <div>
          <p>new user?</p> <span><Link to={'/register?redirect=' + redirect}>Sign Up Here</Link></span>
        </div>
        <button type="submit">Log-in</button>
      </form>
    </div>
  )
}

export default LogInScreen