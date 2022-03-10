import React, { Fragment } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useState, useRef } from 'react'
import styled from './Login.module.css'; 
import LoginForm from '../UI/LoginForm';






const Login = () => {


    let RegisteremailRef = useRef();
    let RegisterpasswordRef = useRef();

    const LoginemailRef = useRef();
    const LoginpasswordRef = useRef();

  const [User, setUser] = useState({}); 

  const [displayLogin, setdisplayLogin] = useState(true); 
    
  onAuthStateChanged(auth,(currentUser)=>{ setUser(currentUser); })

    const register = async () => {
     
        let e = RegisteremailRef.current.value;
        let p = RegisterpasswordRef.current.value;
  

        try {
            const  user = await createUserWithEmailAndPassword(auth,e,p); 
            console.log(user); 
            RegisteremailRef.current.value = ''; 
            RegisterpasswordRef.current.value = ''; 
      
        } catch (error) {
            console.log(error); 
        }
       
    
    }



    const login = async () => {
        const e = LoginemailRef.current.value;
        const p = LoginpasswordRef.current.value;


        try {
            const user = await signInWithEmailAndPassword(auth,e,p); 
            LoginemailRef.current.value = ''; 
            LoginpasswordRef.current.value = ''; 
        } catch (error) {
            console.log(error); 
            
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
      console.log(user); 
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

    }
    




    return (
        <React.Fragment> 
        <div className={styled.App}>   
            <div className={styled.authentication}>
           {displayLogin ? <LoginForm fLoginemailRef={LoginemailRef} fLoginpasswordRef={LoginpasswordRef} flogin={login} fLoginWithGoogle={LoginWithGoogle} displayLogin={setdisplayLogin}  /> : ''} 

     
     
     
   </div>
   </div>

   </React.Fragment>
    )
}

export default Login
