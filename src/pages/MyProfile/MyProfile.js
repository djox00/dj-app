import React, { Fragment, useEffect } from 'react'
import styled from './MyProfile.module.scss'
import { auth } from '../../firebase-config'; 
import {useState} from 'react'; 
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MyProfileHidden } from '../../redux/actions/MyProfileToggleAction';
import { motion } from 'framer-motion';
import PictureInput from './PictureInput';
import { updateProfile } from 'firebase/auth';

const MyProfile = () => {

    const [User, setUser] = useState(''); 
    onAuthStateChanged(auth,(currentUser)=>{ 
      setUser(currentUser); 

    }) 

    const [PictureChanged, setPictureChanged] = useState(false); 

const dispatch = useDispatch(); 

const MyProfileVisible = useSelector(state=> state.MyProfileReducer); 


if(MyProfileVisible){
  document.body.style.overflow = 'hidden';   
}
if(!MyProfileVisible){
  document.body.style.overflow = 'auto';
}



useEffect(() => {
  
  onAuthStateChanged(auth,(currentUser)=>{ 
    setUser(currentUser); 
  }) 
  
}, [PictureChanged])


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
    <div className={styled.close}><FontAwesomeIcon onClick={()=>dispatch(MyProfileHidden())} className={styled['close-button']} icon={faXmark} /></div>
     
  
     <div className={styled.container}>
     <img src={User?.photoURL} alt="no img" />
     <div className={styled.middle}>
   
    <PictureInput setPictureChanged={setPictureChanged} />
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