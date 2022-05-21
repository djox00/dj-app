import React, { Fragment, useEffect } from 'react'
import styled from './MyProfile.module.scss'
import { auth } from '../../firebase-config'; 
import {useState} from 'react'; 
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MyProfileHidden } from '../../redux/actions/MyProfileToggleAction';
import { motion } from 'framer-motion';
import PictureInput from './PictureInput';
import ChangeInput from './ChangeInput';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Error from '../../UI/Error';


const MyProfile = () => {

    const [User, setUser] = useState(''); 
    onAuthStateChanged(auth,(currentUser)=>{ 
      setUser(currentUser); 

    }) 

 
    const [error, seterror] = useState({message: '', status: false}); 



const dispatch = useDispatch(); 

const MyProfileVisible = useSelector(state=> state.MyProfileReducer); 



if(MyProfileVisible){
  document.body.style.overflow = 'hidden';   
}
if(!MyProfileVisible){
  document.body.style.overflow = 'auto';
}


  setTimeout(()=>{
    onAuthStateChanged(auth,(currentUser)=>{ 
      setUser(currentUser); 
    }) 

   }, 1000 )
  
const LoginWithGoogle = auth.currentUser?.providerData[0].providerId === 'google.com'; 
 
console.log(auth.currentUser)

  return (
    <Fragment> 
  

    <motion.div className={styled.backdrop}
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.05,
              ease: [0.61, 1, 0.88, 1],
            }
          }}
          exit={{opacity: 0,  transition: {duration: 0.7} }}
    >
    
    <div className={styled.panel}> 
   {error.status ? <Error>  {error.message.toString()} </Error> : '' } 
    <div style={{width: "100%", marginTop: 15}} >  
    <div className={styled.close}><FontAwesomeIcon onClick={()=>dispatch(MyProfileHidden())} className={styled['close-button']} icon={faXmark} /></div>
    </div>
  
     <div className={styled.container}>
     <img src={User?.photoURL} alt="no img" />
     <div className={styled.middle}>
   
    <PictureInput seterror={seterror} />
  </div>  
</div>

<div className={styled.inputs}>   
<p>Name: {User?.displayName} <ChangeInput seterror={seterror} InputForm="name" inputText="text"   />  </p> <br /> <br />
{!LoginWithGoogle ? <Fragment>   <p>Email: {User?.email} <ChangeInput seterror={seterror} InputForm="email" inputText="email" /></p> <br /> <br />
<p>Password  <ChangeInput seterror={seterror} InputForm="password" inputText="password"  /> </p><br /> <br />
</Fragment> : '' }

</div>  
     
    </div>
    </motion.div> 
    </Fragment>
  )
}

export default MyProfile