import React, { useContext, lazy, Suspense} from 'react';
import styled from './Home.module.scss';
import ChatBar from '../Chat/chatBar';
import MusicWindow from '../Music/MusicWindow';
import {  Row, Col } from 'react-bootstrap';
import { auth } from '../firebase-config';
import Stars from '../Small-UI-components/Stars';
import { motion } from 'framer-motion';
import Loading from '../Small-UI-components/Loading'
import ToggleContext from '../StateProviders/siderbar-toggle';
const Sidebar = lazy(()=> import("../Music/Sidebar"))


const Home = () => {
  
  const starsContext = useContext(ToggleContext); 

    



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
   {starsContext.stars ?  <Stars /> : ''} 
     
  

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