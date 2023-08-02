import { useState, useContext, lazy, Suspense, MouseEvent } from 'react'
import { Link, Route, Routes} from "react-router-dom"
import HomeScreen from './screens/Home'
import LogInScreen from './screens/LogIn'
import RegisterScreen from './screens/Register'
import AboutScreen from './screens/About'
import { Store } from './Store'
import ProtectedRoute from './components/ProtectedRoute'
import Spinner from './components/Spinner'
// import EventScreen from './screens/Even'
const EventScreen = lazy(()=> import('./screens/Event'))
const HallScreen = lazy(()=> import('./screens/Hall'))
const RoomListScreen = lazy(()=> import('./screens/RoomList'))
const DetailRoom = lazy(()=>  import('./screens/DetailRoom'))
const RoomsScreen = lazy(()=> import('./screens/Rooms'))


function App() {
  const {state, logOutHandler} = useContext(Store)
  const hamburgerHandler = (e: MouseEvent<HTMLIFrameElement>) =>{
    document.querySelector('.navy-small')?.classList.add('visibility')
  }
  const hamburgerRemove = ()=>{
    document.querySelector('.navy-small')?.classList.remove('visibility')
  }
  return (
    <div className="App">
      {/* Navbar */}
      <div className="container" style={{maxWidth: '100dvw'}}>
        <div className="nav" style={{margin: 0}}>
          <nav>
            <div className="nav-logo">
              <img src="" alt="logo" />
            </div>
            <div className="nav-items">
              <ul className='navy'>
                <Link to={"/"} className='nav-item'><li>Home</li></Link>
                <Link to={"/about"} className='nav-item'><li>About</li></Link>
                
                <Link to={"/contact"} className='nav-item'><li>Contact</li></Link>
                {state.user ? ( <Link to={'/profile'} className='nav-item'><li ><i  style={{marginRight: '4px'}} className="fa-solid fa-user fa"></i><span>{state.user.name}</span></li></Link>): (
                  <Link to={'/login'} className='nav-item'><li ><i style={{paddingRight: '4px'}} className="fa-solid fa-user fa"></i>Login</li></Link>
                )}
                {state.user && <Link to={'/login'} onClick={logOutHandler} className='nav-item'><li>Log-out</li></Link>}
                <div id='small-screen'>
                <i className='fas fa-bars' style={{fontSize: "25px", cursor: "pointer", position: 'relative'}} onClick={hamburgerHandler}>pp</i>

                  <ul className='navy-small'>
                    <li style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', marginBottom: '.5rem', marginTop: '.3rem', marginLeft: ".7rem"}}>
                      <h3 style={{color: '#000', marginLeft: '.4rem'}} onClick={hamburgerRemove}>X</h3>
                    </li>
                  <Link to={"/"} className='nav-item-small'><li>Home</li></Link>
                  <Link to={"/about"} className='nav-item'><li>About</li></Link>
                  
                  <Link to={"/contact"} className='nav-item-small'><li>Contact</li></Link>
                  {state.user ? ( <Link to={'/profile'} className='nav-item-small'><li ><i  style={{marginRight: '4px'}} className="fa-solid fa-user fa"></i><span>{state.user.name}</span></li></Link>): (
                    <Link to={'/login'} className='nav-item-small'><li ><i style={{paddingRight: '4px'}} className="fa-solid fa-user fa"></i>Login</li></Link>
                  )}
                  {state.user && <Link to={'/login'} onClick={logOutHandler} className='nav-item-small'><li>Log-out</li></Link>}
                </ul>
                </div>

              </ul>
            </div>
          </nav>
        </div>




        {/* main */}
        <div className="main" style={{width: '100%'}}>
          <main style={{width: '100%'}}>
            <Routes>
              <Route path='/' element={<HomeScreen />}/>
              <Route path='/login' element={<LogInScreen />}/>
              <Route path='/register' element={<RegisterScreen />}/>
              <Route path='/about' element={<ProtectedRoute><AboutScreen /></ProtectedRoute>} />
              <Route path='/choose' element={<Suspense fallback={<div style={{width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner /></div>}><EventScreen /></Suspense>} />
              <Route path='/bookhall' element={<Suspense fallback={<div style={{width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner /></div>}><HallScreen /></Suspense>} />
              <Route path='/rooms' element={<Suspense fallback={<div style={{width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner /></div>}><RoomListScreen /></Suspense>} />
              <Route path='/rooms/:size' element={<Suspense fallback={<div style={{width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner /></div>}><RoomsScreen /></Suspense>} />
              <Route path='/rooms/:size/:roomId' element={<Suspense fallback={<div style={{width: '100dvw', height: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Spinner /></div>}><DetailRoom /></Suspense>} />
              <Route path='/*' element={<HomeScreen />} />
            </Routes>
          </main>
        </div>



        {/* footer */}
        <div className="footer">
          <footer>
              <h3>Copyrights 2023</h3>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
