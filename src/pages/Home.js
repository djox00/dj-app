import React, {  lazy, Suspense} from 'react';
import styled from './Home.module.scss';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../Music/MusicWindow';
import {  Row, Col } from 'react-bootstrap';
import { auth } from '../firebase-config';
import Stars from '../Small-UI-components/Stars';
import { motion } from 'framer-motion';
import Loading from '../Small-UI-components/Loading'
import { ref, getDatabase, refFromURL, serverTimestamp, onValue, query, onDisconnect, set } from 'firebase/database'
import { database } from '../firebase-config';
import { useSelector } from 'react-redux';



const Sidebar = lazy(()=> import("../Music/Sidebar"))






const Home = () => {
  
  const StarsVisible = useSelector(state => state.StarsReducer); 


  return (
    <React.Fragment>  
      
      <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.61, 1, 0.88, 1],
        }
      }}
      exit={{opacity: 0,  transition: {duration: 0.7} }}
      
      >    


    
     {auth.currentUser!=null ? <Suspense fallback={<Loading />}> <Sidebar   />   </Suspense> : '' }  
    <div className={styled.page} >
   {StarsVisible ?  <Stars /> : ''} 
     
  

     <div className={styled.music}>
   
   <Row className={styled.content}>     

    <Col lg={6} > <MusicWindow  />  </Col>
    <Col lg={6} ><ChatBar /> </Col>
    </Row>
    
     </div>
 
    </div>

   
    </motion.div>
    </React.Fragment>
  )
}

export default Home