
import React, { Fragment} from 'react';
import NavBar from './UI/NavBar';
import styled from './App.module.scss'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Footer from './UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedRoutes from './Small-UI-components/AnimatedRoutes';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/index.js'; 

function App() {

 const myStore = configureStore({reducer: reducer},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
 return (
    <Fragment>
      <Provider store={myStore}> 
      
    <div className={styled.page}>      
    <Router >
           <NavBar/> 
  
           <AnimatedRoutes />
   </Router>
  
   <footer> <Footer/></footer>
   </div>   
   
   </Provider>
   </Fragment>
  );
}


export default App;
