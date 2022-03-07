import React from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { useState, useRef } from 'react'





const Login = () => {
    const [Registeremail, setRegisteremail] = useState(''); 
    const [Registerpassword, setRegisterpassword] = useState(''); 
    const emailRef = useRef();
    const passwordRef = useRef();

  const [User, setUser] = useState({}); 


  onAuthStateChanged(auth,(currentUser)=>{ setUser(currentUser); })



    const RegisterHandler = (event) => {
        const e = emailRef.current.value;
        const p = passwordRef.current.value;
  
        if (event.key === 'Enter' || event.type === 'click') {
          
          setRegisteremail(e); 
          setRegisterpassword(p); 
           
          register();   
          emailRef.current.value = ''; 
          passwordRef.current.value = ''; 
        };
      }



    const register = async () => {
        try {
            const  user = createUserWithEmailAndPassword(auth,Registeremail,Registerpassword); 
            console.log(user); 
      
        } catch (error) {
            console.log(error); 
        }
       
    
    }
    
    const login = async () => {

      
    
    }
    
    const logout = async () => {
       await signOut(auth); 
    
    }







    return (
        <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="email" required ref={emailRef} />
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required ref={passwordRef} />
       
       </div>
       <div className="button-container">
         <input type="submit" value="Register" onClick={RegisterHandler} />
       </div>
     </form>

     <div>Logged in: {User?.email}</div>

     <input type="button" onClick={logout} value="log out" />
   </div>
    )
}

export default Login
