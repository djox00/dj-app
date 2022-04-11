import React, { Fragment } from 'react'
import styled from './MyProfile.module.scss'
import { auth } from '../firebase-config'; 
import firebase from 'firebase/compat/app';
import {useState} from 'react'; 
import { onAuthStateChanged } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';



const MyProfile = () => {

    const [User, setUser] = useState(''); 
    onAuthStateChanged(auth,(currentUser)=>{ 
      setUser(currentUser); 

     
    }) 


    /* updateProfile(auth.currentUser, {  }); */

    console.log(User);

  return (
    <Fragment> 
    <div className={styled.page}> 

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
    </div>
    </Fragment>
  )
}

export default MyProfile