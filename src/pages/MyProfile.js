import React, { Fragment } from 'react'
import styled from './MyProfile.module.scss'
import { auth } from '../firebase-config'; 
import firebase from 'firebase/compat/app';
import {useState} from 'react'; 
import { onAuthStateChanged } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { motion } from 'framer-motion';



const MyProfile = () => {

    const [User, setUser] = useState(''); 
    onAuthStateChanged(auth,(currentUser)=>{ 
      setUser(currentUser); 

     
    }) 


    /* updateProfile(auth.currentUser, {  }); */

    console.log(User);

  return (
    <Fragment> 
    <motion.div className={styled.page}
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.61, 1, 0.88, 1],
      }
    }}
    exit={{opacity: 0,  transition: {duration: 0.7} }}
    
    
    > 

     <div className={styled.panel}> 
  
     <div className={styled.container}>
     <img src={User?.photoURL} alt="no img" />
     <div className={styled.middle}>
    <div className={styled.text}>Change image</div>
  </div>  
</div>

<div className={styled.inputs}>    
<input  type="text" placeholder="Display Name" value={User?.displayName}  />
<button value="Apply change"/>
<input type="email" placeholder="email" value={User?.email} disabled   />
<input  type="number" placeholder="Phone number" value={User?.phoneNumber}  />

<button value="Apply change"/>






</div>  
     





     </div>
     
    </motion.div>
    
    </Fragment>
  )
}

export default MyProfile