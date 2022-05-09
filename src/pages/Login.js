import React, { Fragment } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getRedirectResult, GoogleAuthProvider, setPersistence, browserLocalPersistence, signInWithPopup, browserSessionPersistence } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useState} from 'react'
import styled from './Login.module.scss';
import LoginForm from '../UI/LoginForm';
import RegisterForm from '../UI/RegisterForm';
import Error from '../UI/Error';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { motion } from 'framer-motion';
import { getFirestore, collection, query } from 'firebase/firestore';
import { useFirestoreQuery } from '../costumHooks/firebase-hooks';








const Login = () => {
  
  // display the user form by default 
  const [displayLogin, setdisplayLogin] = useState(true);

  const db = getFirestore(); 
  const adminsRef = collection(db,"administrators"); 
  const q = query(adminsRef); 
  const admins = useFirestoreQuery(q);
  const navigate = useNavigate();


  const setAdmin =  () =>{    

     if(admins.filter((admin)=> admin.user === auth.currentUser.uid).length){
           window.sessionStorage.setItem("admin",true); 
        navigate("/Home")
     } else {
      window.sessionStorage.setItem("admin",false); 
       navigate("/Home")
     }
    }


  // if status is true the errorMessage will be displayed  
  const [ErrorStatus, setErrorStatus] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  // executes when the user hits register  
  const register = async (name, e, p, c) => {

    if (p === c) {
      try {
        
        await createUserWithEmailAndPassword(auth, e, p);
        updateProfile(auth.currentUser, { displayName: name });
        console.log(auth.currentUser);
        setErrorStatus(false);
        navigate("/Home");

      } catch (error) {
        setErrorStatus(true);    // displays the error box 
        seterrorMessage(error);  // sets the message 
      }
    } else {
      setErrorStatus(true);    // displays the error box 
      seterrorMessage('Password does not match!');  // sets the message 


    }


  }



  const login = async (e, p) => {


    try {
      await  setPersistence(auth,browserSessionPersistence); 
      const user = await signInWithEmailAndPassword(auth, e, p);
      setErrorStatus(false);
      setAdmin(); 
    

    } catch (error) {
      setErrorStatus(true);    // displays the error box 
      seterrorMessage(error);  // sets the message 

    }
  }



  const LoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await  setPersistence(auth,browserSessionPersistence); 
      const result = await signInWithPopup (auth, provider); 
       GoogleAuthProvider.credentialFromResult(result);
        setErrorStatus(false); 
         setAdmin(); 
     

    } catch (error) {
      setErrorStatus(true);    // displays the error box 
      seterrorMessage(error.message);  // sets the message 
      GoogleAuthProvider.credentialFromError(error);
    }
        
  }

  return (



      <motion.div className={styled.page}
      
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.61, 1, 0.88, 1],
        }
      }}
     
     
      >
        {ErrorStatus ? <Error>{errorMessage}</Error> : ''}
        <div className={styled.authentication}>
          {displayLogin ?
            <LoginForm  flogin={login} fLoginWithGoogle={LoginWithGoogle} displayLogin={setdisplayLogin} /> :
            <RegisterForm fregister={register} displayLogin={setdisplayLogin} />}

        </div>
      </motion.div>

    
  )
}

export default Login
