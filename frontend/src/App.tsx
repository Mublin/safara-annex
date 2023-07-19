import { useState, useContext, lazy, Suspense } from 'react'
import { Link, Route, Routes} from "react-router-dom"
import HomeScreen from './screens/Home'
import LogInScreen from './screens/LogIn'
import RegisterScreen from './screens/Register'
import AboutScreen from './screens/About'
import { Store } from './Store'
import ProtectedRoute from './components/ProtectedRoute'
// import EventScreen from './screens/Even'
const EventScreen = lazy(()=> import('./screens/Event'))
import HallScreen from './screens/Hall'
import RoomListScreen from './screens/RoomList'
const RoomsScreen = lazy(()=> import('./screens/Rooms'))


function App() {
  const {state, logOutHandler} = useContext(Store)
  return (
    <div className="App">


      {/* Navbar */}
      <div className="container" >
        <div className="nav" style={{margin: 0}}>
          <nav style={{paddingTop: '0.7rem', position: 'absolute', zIndex: 10, display: 'flex', justifyContent: 'space-between', width: '100dvw'}}>
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
                <i className='fas fa-bars' style={{fontSize: "25px", cursor: "pointer"}}></i>
              </ul>
            </div>
          </nav>
        </div>




        {/* main */}
        <div className="main">
          <main>
            <Routes>
              <Route path='/' element={<HomeScreen />}/>
              <Route path='/login' element={<LogInScreen />}/>
              <Route path='/register' element={<RegisterScreen />}/>
              <Route path='/about' element={<ProtectedRoute><AboutScreen /></ProtectedRoute>} />
              <Route path='/choose' element={<Suspense fallback='loading'> <EventScreen /></Suspense>} />
              <Route path='/bookhall' element={<HallScreen />} />
              <Route path='/rooms' element={<Suspense fallback={'loading'}><RoomListScreen /></Suspense>} />
              <Route path='/rooms/:size' element={<Suspense fallback={<>loading...</>}><RoomsScreen /></Suspense>} />
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