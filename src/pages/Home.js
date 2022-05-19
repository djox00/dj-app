import React, {lazy, Suspense} from 'react';
import styled from './Home.module.scss';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../Music/MusicWindow';
import {  Row, Col } from 'react-bootstrap';
import Stars from '../Small-UI-components/Stars';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import Sidebar from "../Music/Sidebar"
import Loading from '../Small-UI-components/Loading';
import { auth } from '../firebase-config';
const MyProfile = lazy(()=> import("./MyProfile/MyProfile"))

const Home = () => {
  
  const StarsVisible = useSelector(state => state.StarsReducer); 
  const MyProfileVisible = useSelector(state => state.MyProfileReducer); 

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


     {MyProfileVisible && auth.currentUser!=null ? <Suspense fallback={<Loading />} >    <MyProfile /> </Suspense> : '' } 
       <Sidebar   /> 
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