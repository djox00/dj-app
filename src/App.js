
import React, { createContext, Fragment } from 'react';
import Home from './pages/Home';
import NavBar from './UI/NavBar';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './UI/Footer';



function App() {


  return (
    <Fragment>    
    <Router>
           <NavBar/> 
   <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Login" element={ <Login/> } />
        <Route path="/MyProfile" element={ <MyProfile />} />
      </Routes>
      <Footer/>
   </Router>

   </Fragment>
  );
}

export default App;
