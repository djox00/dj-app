
import React, { createContext, Fragment } from 'react';
import Home from './pages/Home';
import NavBar from './UI/NavBar';
import Login from './pages/Login';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './UI/Footer';
export const UserContext = createContext('bla'); 


function App() {
  const [testC, settestC] = useState('Djole')


  return (
    <Fragment>    
<UserContext.Provider value={testC}> 
    <Router>
           <NavBar/> 
 
   <Routes>
     
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Login" element={ <Login/> } />
    
      </Routes>
      <Footer/>
   </Router>
   </UserContext.Provider>
   </Fragment>
  );
}

export default App;
