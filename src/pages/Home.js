import React, {lazy, Suspense} from 'react';
import styled from './Home.module.scss';
import Footer from '../UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../Music/MusicWindow';
import { Container, Row, Col } from 'react-bootstrap';
import { auth } from '../firebase-config';
import { SideBarContextProvider } from '../StateProviders/siderbar-toggle';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import Stars from '../Small-UI-components/Stars';
const Sidebar = lazy(() => import('../Music/Sidebar') );  



const Home = () => {
  
  const [User, setUser] = useState(''); 
  onAuthStateChanged(auth,(currentUser)=>{ 
    setUser(currentUser); 
  })

  

  return (
    <React.Fragment>  
<SideBarContextProvider>   

     {User!=null ? <Suspense fallback={"Loading..."}> <Sidebar   />   </Suspense> : '' } 
    <div className={styled.page}>
   <Stars /> 
     
     <div className={styled.music}>
   
   <Row className={styled.content}>     

    <Col lg={6} > <MusicWindow  />  </Col>
    <Col lg={6} ><ChatBar /> </Col>
    </Row>
    
     </div>
 
    </div>
    </SideBarContextProvider>
    </React.Fragment>
  )
}

export default Home