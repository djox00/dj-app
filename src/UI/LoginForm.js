import React from 'react'
import GoogleButton from '../Small-UI-components/GoogleButton'
import styled from './LoginForm.module.css'
const LoginForm = ({fLoginemailRef,fLoginpasswordRef,flogin,fLoginWithGoogle,displayLogin}) => {


const goToRegisterForm = () =>{ 
    displayLogin(false); 
}


  return (
    <div className={styled.main}> 
       
      <p className={styled.sign}>Sign in</p>
     <form className={styled.form}>

    
     <div className={styled['center-wrap']}><input className={styled.email} type="email" placeholder="email" required ref={fLoginemailRef} /></div>
     <div className={styled['center-wrap']}> <input className={styled.pass} type="password" placeholder="password" name="pass" required ref={fLoginpasswordRef} /> </div>
   <div className={styled['center-wrap']}>  <input className={styled['sign-in']}  type="button" value="Login" onClick={flogin} />  </div>
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