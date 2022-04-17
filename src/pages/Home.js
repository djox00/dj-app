import React, {lazy, Suspense, useContext, useEffect} from 'react';
import styled from './Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../Music/MusicWindow';
import {  Row, Col } from 'react-bootstrap';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import Stars from '../Small-UI-components/Stars';
import Loading from '../Small-UI-components/Loading';
import Sidebar from '../Music/Sidebar'
import SideBarToggleContext from '../StateProviders/siderbar-toggle';



const Home = () => {
  

  const SBcontext = useContext(SideBarToggleContext); 

  const [User, setUser] = useState(''); 
  onAuthStateChanged(auth,(currentUser)=>{ 
    setUser(currentUser); 
  })

if(SBcontext.SBvisible){
  document.body.style.overflow = 'hidden';   
}
if(!SBcontext.SBvisible){
  document.body.style.overflow = 'auto';
}

  
  return (
    <React.Fragment>  


     {User!=null ? <Sidebar   />  : '' } 
    {/*  {User!=null ? <Suspense fallback={<Loading>Loading...</Loading>}> <Sidebar   />   </Suspense> : '' }   pravi bug tj prikazuje prazan div umjesto load elementa */}
    <div className={styled.page} >
   <Stars /> 
     
     <div className={styled.music}>
   
   <Row className={styled.content}>     

    <Col lg={6} > <MusicWindow  />  </Col>
    <Col lg={6} ><ChatBar /> </Col>
    </Row>
    
     </div>
 
    </div>

   
   
    </React.Fragment>
  )
}

export default Home