import React from 'react';
import styled from './Home.module.css';
import Footer from '../UI/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBar from '../UI/chatBar';
import MusicWindow from '../UI/MusicWindow';
import { Container, Row, Col } from 'react-bootstrap';


const Home = () => {
  return (
    <React.Fragment>   
    <div className={styled.App}>
 
     <div className={styled.music}>
   
   <Row>    

    <Col lg={6} > <MusicWindow />  </Col>
    <Col lg={6} ><ChatBar /> </Col>
    </Row>
    
     </div>
 
    </div>
    </React.Fragment>
  )
}

export default Home