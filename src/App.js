
import React, { Fragment} from 'react';
import NavBar from './UI/NavBar';
import styled from './App.module.scss'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Footer from './UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedRoutes from './Small-UI-components/AnimatedRoutes';

function App() {


  return (
    <Fragment>
    <div className={styled.page}>      
    <Router >
           <NavBar/> 
  
           <AnimatedRoutes />
   </Router>
  
   <footer> <Footer/></footer>
   </div>   
   </Fragment>
  );
}


export default App;
