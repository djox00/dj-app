import React, { Fragment } from 'react'
import styled from './RegisterForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';
import { useRef } from 'react';
const RegisterForm = ({fregister,displayLogin}) => {

  const goToLoginForm = () =>{ 
    displayLogin(true); 
}

const props = useSpring({ from: {height : 600 }, to: {height : 520 }, delay: 300})

const RegisterDisplayName = useRef(); 
const RegisteremailRef = useRef();
const RegisterpasswordRef = useRef();
const RegisterConfirmRef = useRef(); 

const register = (e) => { 
  e.preventDefault(); 
  
 const displayname = RegisterDisplayName.current.value; 
 const email = RegisteremailRef.current.value; 
 const password = RegisterpasswordRef.current.value; 
 const confirmPassword = RegisterConfirmRef.current.value; 

 fregister(displayname,email,password,confirmPassword); 




}


  return (
    <Fragment> 
 <animated.div style={props}  className={styled.main}> 
      <div className={styled["back-arrow-container"]}><FontAwesomeIcon className={styled["back-icon"]} onClick={goToLoginForm} icon={faAngleLeft} /> </div>
       <p className={styled.sign}>Create an account</p>
      <form className={styled.form}>
 
      <div className={styled['center-wrap']}><input className={styled.email} type="text" placeholder="enter Frist name and Last name " ref={RegisterDisplayName} required /></div>
      <div className={styled['center-wrap']}><input className={styled.email} type="email" placeholder="email" required ref={RegisteremailRef} /></div>
      <div className={styled['center-wrap']}> <input className={styled.pass} type="password" placeholder="password" name="pass" required ref={RegisterpasswordRef} /> </div>
      <div className={styled['center-wrap']}> <input className={styled.pass} type="password" placeholder="Confirm password" name="pass" required ref={RegisterConfirmRef} /> </div>
    <div className={styled['center-wrap']}>  <input className={styled['sign-in']}  type="submit" value="Register" onClick={register} />  </div>
  
    </form>


 
 
  </animated.div>
        
    </Fragment>
  )
}

export default RegisterForm