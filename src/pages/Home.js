import React from 'react';
import styled from './Home.module.css';
import Footer from '../UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../UI/MusicWindow';
import { Container, Row, Col } from 'react-bootstrap';
import { auth } from '../firebase-config';

const Home = () => {
  console.log(auth.currentUser); 
  return (
    <React.Fragment>   
    <div className={styled.App}>
 
     <div className={styled.music}>
   
   <Row className={styled.content}>     

    <Col lg={6} > <MusicWindow />  </Col>
    <Col lg={6} ><ChatBar /> </Col>
    </Row>
    
     </div>
 
    </div>
    </React.Fragment>
  )
}

export default Home