import React, { Fragment } from 'react'
import styled from './Landing.module.scss'
import {Col, Row} from 'react-bootstrap'
import reactfirebase from '../images/reactfirebase.png'
import Badge from '../Small-UI-components/Badge'
import ReactDOM from 'react-dom'

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

        <h2><span style={{color: "rgb(180, 64, 200)" }}>AstroDj </span> is designed and created with: </h2>   
         
         <img src={reactfirebase} alt="Firebase" />


         <h2>Project created by: </h2> 

        <Badge />
        
     
       </Col>
       
 
     </Row>





     </div>



    </Fragment>
  )
}

export default Landing