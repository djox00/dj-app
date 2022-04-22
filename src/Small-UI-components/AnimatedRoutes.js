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
  import MyProfile from '../pages/MyProfile';
  import { SideBarContextProvider } from '../StateProviders/siderbar-toggle';
  import { AnimatePresence } from 'framer-motion';




const AnimatedRoutes = () => {

    const location = useLocation(); 


  return (
  <AnimatePresence>   
    <Routes location={location} key={location.pathname}>
    <Route path="/Home" element={<SideBarContextProvider> <Home/> </SideBarContextProvider> }/>
    <Route path="/Login" element={ <Login/> } />
    <Route path="/MyProfile" element={ <MyProfile />} />
    <Route path="/Rules" element={ <Rules/> } />
    <Route exact path="/" element={ <Landing />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes