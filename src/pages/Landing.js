import React, { Fragment } from 'react'
import styled from './Landing.module.scss'
import {Col, Row} from 'react-bootstrap'
import reactfirebase from '../images/reactfirebase.png'
import Badge from '../Small-UI-components/Badge'


const Landing = () => {


function a() {
  b()
  console.log("1");

}
function b() {
  console.log("2");
}

a();


  return (
    <Fragment>

     <div className={styled.page} id="landing"> 
    
    <Row className={styled.row}>   

      <Col className={styled.col} lg={6}>
        
        <h1>Welcome to <span style={{color: "rgb(180, 64, 200)" }}> AstroDj!</span></h1>    

        <h2>This site is designed and created with: </h2>   
         
         <img src={reactfirebase} alt="Firebase" />
         <div className={styled.components}>  
         <img src="https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png" alt="fontawesome" /> 
         <img src="https://camo.githubusercontent.com/973c99d17e4ce72d08c4433449045d8391948711f11ac5f328a585e2a7bc8663/68747470733a2f2f692e696d6775722e636f6d2f515a6f776e68672e706e67" alt="spring" />
         <img src=" https://mui.com/static/logo.png" alt="mui" />     
         <img src="https://miro.medium.com/max/500/1*tOI6UC5EaS2fPItCesI-AQ.png" alt="Redux" />              
         <img src="https://camo.githubusercontent.com/84746920d1a9906680c387b3cc8753ee842e996fc8915abd295011e15b594b74/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e312f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67" alt="bootstrap" />  
         <img src="https://i.pinimg.com/originals/83/03/cd/8303cd6c946f9b0040ade2c6c981157a.jpg"   alt="youtube api" /> 
         <img src=" https://w7.pngwing.com/pngs/887/757/png-transparent-framer-logos-brands-icon.png" alt="Framer" />   
         
         

         </div>
         <h3>Project created by: </h3> 

        <Badge />
        
     
       </Col>
       
 
     </Row>





     </div>



    </Fragment>
  )
}

export default Landing