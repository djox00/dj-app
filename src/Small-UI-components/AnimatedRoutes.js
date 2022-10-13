import React from 'react'
import {
    Routes,
    Route,
    useLocation              
  } from 'react-router-dom';
  import Rules from '../pages/Rules';
  import  Home  from '../pages/Home';
  import Landing from '../pages/Landing';
  import Login from '../pages/Login';
  import MyProfile from '../pages/MyProfile/MyProfile';
  import { AnimatePresence } from 'framer-motion';
import Info from '../pages/Info';




const AnimatedRoutes = () => {

    const location = useLocation(); 


  return (
  <AnimatePresence>   
    <Routes location={location} key={location.pathname}>
    <Route path="/Home" element={ <Home/> }/>
    <Route path="/Login" element={ <Login/> } />
    <Route path="/MyProfile" element={ <MyProfile />} />
    <Route path="/Rules" element={ <Rules/> } />
    <Route path="/Info" element={ <Info/> } />
    <Route exact path="/" element={ <Landing />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes