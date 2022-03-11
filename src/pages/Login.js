import React, { Fragment } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useState, useRef } from 'react'
import styled from './Login.module.css'; 
import LoginForm from '../UI/LoginForm';
import RegisterForm from '../UI/RegisterForm';
import Error from '../UI/Error';








const Login = () => {

// register refs 
    const RegisteremailRef = useRef();
    const RegisterpasswordRef = useRef();
    const RegisterConfirmRef = useRef(); 
// login refs 
    const LoginemailRef = useRef();
    const LoginpasswordRef = useRef();
// Current user logged in 
  const [User, setUser] = useState({}); 
// display the user form by default 
  const [displayLogin, setdisplayLogin] = useState(true); 
  
// react to the user that is logged in 
  onAuthStateChanged(auth,(currentUser)=>{ setUser(currentUser); })

const [ErrorStatus, setErrorStatus] = useState(false); 
const [errorMessage, seterrorMessage] = useState(''); 
  // executes when the user hits register 
    const register = async () => {
        let e = RegisteremailRef.current.value;
        let p = RegisterpasswordRef.current.value;
        let c = RegisterConfirmRef.current.value;
        if(p===c){  
        try {
            const  user = await createUserWithEmailAndPassword(auth,e,p); 
            console.log(user); 
            RegisteremailRef.current.value = ''; 
            RegisterpasswordRef.current.value = ''; 
            RegisterConfirmRef.current.value = ''; 
      
        } catch (error) {
            console.log(error); 
        }} else { console.log('password error');     }
       
    
    }
 
    

    const login = async () => {
        const e = LoginemailRef.current.value;
        const p = LoginpasswordRef.current.value;


        try {
            const user = await signInWithEmailAndPassword(auth,e,p); 
            LoginemailRef.current.value = ''; 
            LoginpasswordRef.current.value = ''; 
            setErrorStatus(false); 
        } catch (error) {
          setErrorStatus(true);    // displays the error box 
          seterrorMessage(error);  // sets the message 
            
        }
  
      
    
    }
    
    const logout = async () => {
       await signOut(auth); 
    
    }



   

    const LoginWithGoogle = () =>{ 
      const provider = new GoogleAuthProvider(); 
    signInWithPopup(auth,provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setErrorStatus(false);          // removes error if its active 
      console.log(user); 
      // ...
    }).catch((error) => {
      // Handle Errors here.
      
      setErrorStatus(true);    // displays the error box 
      seterrorMessage(error.message);  // sets the message 
      // The email of the user's account used.


      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

    }
    


    return (


        <React.Fragment> 
          {ErrorStatus ? <Error></Error> : ''}
        <div className={styled.App}>   
            <div className={styled.authentication}>
           {displayLogin ?
            <LoginForm fLoginemailRef={LoginemailRef} fLoginpasswordRef={LoginpasswordRef} flogin={login} fLoginWithGoogle={LoginWithGoogle} displayLogin={setdisplayLogin}  /> :
               <RegisterForm fRegisteremailRef={RegisteremailRef} fRegisterpasswordRef={RegisterpasswordRef} fRegisterConfirmRef={RegisterConfirmRef} fregister={register} displayLogin={setdisplayLogin}  />} 

     

     
   </div>
   </div>

   </React.Fragment>
    )
}

export default Login
