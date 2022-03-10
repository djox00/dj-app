
import React from 'react';
import Home from './pages/Home';
import NavBar from './UI/NavBar';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Footer from './UI/Footer';

function App() {
  return (
    <Router>
           <NavBar/> 
   <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Login" element={ <Login/> } />
    
      </Routes>
      <Footer/>
   </Router>
  );
}

export default App;
