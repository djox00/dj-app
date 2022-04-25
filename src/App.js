
import React, { Fragment} from 'react';
import NavBar from './UI/NavBar';
import styled from './App.module.scss'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Footer from './UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedRoutes from './Small-UI-components/AnimatedRoutes';
import {ToggleContextProvider} from './StateProviders/siderbar-toggle'

function App() {


  return (
    <Fragment>
      <ToggleContextProvider> 
    <div className={styled.page}>      
    <Router >
           <NavBar/> 
  
           <AnimatedRoutes />
   </Router>
  
   <footer> <Footer/></footer>
   </div>   
   </ToggleContextProvider>
   </Fragment>
  );
}


export default App;
