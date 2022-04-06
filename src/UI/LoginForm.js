import React from 'react'
import GoogleButton from '../Small-UI-components/GoogleButton'
import styled from './LoginForm.module.scss'
import { useRef } from 'react'
const LoginForm = ({flogin,fLoginWithGoogle,displayLogin}) => {


  const LoginemailRef = useRef();
  const LoginpasswordRef = useRef();
  

const goToRegisterForm = () =>{ 
    displayLogin(false); 
}

const login = (e) => { 

e.preventDefault(); 

const email = LoginemailRef.current.value; 
const password = LoginpasswordRef.current.value; 

flogin(email,password); 

 LoginpasswordRef.current.value = ''; 

}



  return (
    <div className={styled.main}> 
       
      <p className={styled.sign}>Sign in</p>
     <form className={styled.form}>

    
     <div className={styled['center-wrap']}><input className={styled.email} type="email" placeholder="email" required ref={LoginemailRef} /></div>
     <div className={styled['center-wrap']}> <input className={styled.pass} type="password" placeholder="password" name="pass" required ref={LoginpasswordRef} /> </div>
   <div className={styled['center-wrap']}>  <input className={styled['sign-in']}  type="submit" value="Login" onClick={login} />  </div>
   <hr />
   </form>
   <div className={styled['center-wrap']}><p>Dont have an account? </p></div>
   <div className={styled['center-wrap']}> <GoogleButton onClick={fLoginWithGoogle} >Sign in with Google</GoogleButton></div>
   <div className={styled['center-wrap']}><p>or</p></div>
   <div className={styled['center-wrap']}> <input className={styled['sign-in']}  type="button" value="Create an account" onClick={goToRegisterForm} />  </div>


 </div>
  )
}

export default LoginForm