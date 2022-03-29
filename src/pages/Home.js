import React from 'react';
import styled from './Home.module.css';
import Footer from '../UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../Music/MusicWindow';
import { Container, Row, Col } from 'react-bootstrap';
import { auth } from '../firebase-config';
import Sidebar from '../Music/Sidebar';
import { useState } from 'react';
const Home = () => {
  console.log(auth.currentUser); 

const [toggle, settoggle] = useState(false); 




  return (
    <React.Fragment>   
      <Sidebar toggle={toggle} setToggle={settoggle}  />
    <div className={styled.App}>
 
     <div className={styled.music}>
   
   <Row className={styled.content}>     

    <Col lg={6} > <MusicWindow setToggle={settoggle} />  </Col>
    <Col lg={6} ><ChatBar /> </Col>
    </Row>
    
     </div>
 
    </div>
    </React.Fragment>
  )
}

export default Home