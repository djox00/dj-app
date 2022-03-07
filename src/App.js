
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

function App() {
  return (
    <Router>
           <NavBar/>  
   <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Login" element={ <Login/> } />
    
      </Routes>
   </Router>
  );
}

export default App;
