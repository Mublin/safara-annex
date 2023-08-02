import React, {useContext, useState, useEffect, ChangeEvent, MouseEvent} from 'react'
import { Store } from '../Store'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'

const RegisterScreen = () => {
  const { state, registerHandler } = useContext(Store)
  const {user} = state
  const navigate = useNavigate()
  const {search} = useLocation()
  const redirectUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectUrl || '/'
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const submitHandler = async (e: MouseEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await registerHandler(name, username.toLowerCase(), password, email.toLowerCase(), redirect);
  }

  useEffect(()=>{
    console.log(state)
    if (state.user) {
      navigate('/')
    }
  }, [user, navigate])


  
  return (
    <div>
      <form onSubmit={submitHandler} style={{marginTop:'4rem', minHeight: "85dvh", display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100dvw',}}>
      <label htmlFor="username"> name:
          <input type="text" value={name} required minLength={3} onChange={(e: ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />
        </label>
        <label htmlFor="emai"> E-mail:
          <input type="email" value={email} required minLength={3} onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} />
        </label>
        <label htmlFor="username"> username:
          <input type="text" value={username} required minLength={3} onChange={(e: ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)} />
        </label>
        <label htmlFor="username"> password:
          <input type="password" value={password} required minLength={3} onChange={(e: ChangeEvent<HTMLInputElement>)=> setPassword  (e.target.value)} />
        </label>
        <div>
          <p>Already have an account?</p> <span><Link to={'/login?redirect=' + redirect}>log-in</Link></span>
        </div>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  )
}

export default RegisterScreen