import React, { Fragment } from 'react'
import styled from './RegisterForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { animated, useSpring } from 'react-spring';
const RegisterForm = ({fRegisteremailRef,fRegisterpasswordRef,fRegisterConfirmRef,fregister,displayLogin}) => {

  const goToLoginForm = () =>{ 
    displayLogin(true); 
}

const props = useSpring({ from: {height : 600 }, to: {height : 450 }, delay: 300})



  return (
    <Fragment> 
 <animated.div style={props}  className={styled.main}> 
      <div className={styled["back-arrow-container"]}><FontAwesomeIcon className={styled["back-icon"]} onClick={goToLoginForm} icon={faAngleLeft} /> </div>
       <p className={styled.sign}>Create an account</p>
      <form className={styled.form}>
 
    
      <div className={styled['center-wrap']}><input className={styled.email} type="email" placeholder="email" required ref={fRegisteremailRef} /></div>
      <div className={styled['center-wrap']}> <input className={styled.pass} type="password" placeholder="password" name="pass" required ref={fRegisterpasswordRef} /> </div>
      <div className={styled['center-wrap']}> <input className={styled.pass} type="password" placeholder="Confirm password" name="pass" required ref={fRegisterConfirmRef} /> </div>
    <div className={styled['center-wrap']}>  <input className={styled['sign-in']}  type="button" value="Register" onClick={fregister} />  </div>
  
    </form>


 
 
  </animated.div>
        
    </Fragment>
  )
}

export default RegisterForm