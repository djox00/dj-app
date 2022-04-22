import React, { Fragment } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, GoogleAuthProvider, getRedirectResult,  signInWithRedirect, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useState} from 'react'
import styled from './Login.module.scss';
import LoginForm from '../UI/LoginForm';
import RegisterForm from '../UI/RegisterForm';
import Error from '../UI/Error';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { motion } from 'framer-motion';









const Login = () => {

  


  const [User, setUser] = useState({});

  // display the user form by default 
  const [displayLogin, setdisplayLogin] = useState(true);

  // react to the user that is logged in 
  onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); })
  const navigate = useNavigate();

  if(auth.currentUser!=null){ navigate("/Home");} 



  // if status is true the errorMessage will be displayed  
  const [ErrorStatus, setErrorStatus] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');
  // executes when the user hits register  
  const register = async (name, e, p, c) => {

    if (p === c) {
      try {
        await setPersistence(auth,browserLocalPersistence);
        const user = await createUserWithEmailAndPassword(auth, e, p);
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
      const user = await signInWithEmailAndPassword(auth, e, p);
      setErrorStatus(false);
      navigate("/Home");

    } catch (error) {
      setErrorStatus(true);    // displays the error box 
      seterrorMessage(error);  // sets the message 

    }



  }



  const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect (auth, provider)
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
