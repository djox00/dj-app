import React,{Fragment, useRef} from 'react'
import Popover from '@mui/material/Popover';
import { auth } from '../../firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { updatePassword, updateEmail,updateProfile } from "firebase/auth";


const ChangeInput = ({children,InputForm,inputText,seterror}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  


const ThisRef = useRef(); 
const ConfirmRef = useRef(); 






const SubmitChange = async (e) =>{
 e.preventDefault(); 
switch (InputForm) {

  case "name":    // change name 

  try {
    if(ThisRef.current.value === '') throw new Error("Input field is empty!") 
    await  updateProfile(auth.currentUser,{displayName: ThisRef.current.value}); 
    handleClose()
    seterror({error: '', status: false}); 
  } catch (error) {
    
    seterror( ()=> { return {message: error.message, status: true}}); 
  }
 
  break; 

  case "email":  // change email 

  try{ 
    if(ThisRef.current.value === '') throw new Error("Input field is empty!") 
  await updateEmail(auth.currentUser, ThisRef.current.value); 
  handleClose()
  seterror({error: '', status: false}); 
}
  catch(error){
    seterror( ()=> { return {message: error.message, status: true}}); 
  }
  break; 



  case "password": 
  try{
  if(ThisRef.current.value !== ConfirmRef.current.value) throw new Error("Passwords do NOT match");    
  if(ThisRef.current.value === '') throw new Error("Input field is empty!") 
  await updatePassword(auth.currentUser, ThisRef.current.value  )
  handleClose()
  seterror({error: '', status: false}); 
}
  catch(error){
    seterror( ()=> { return {message: error.message, status: true}}); 
  }
  break; 

  default:
    return null;
}



  
  }







  return (
    <Fragment>
      
       <FontAwesomeIcon onClick={handleClick} icon={faPen} style={{display: "inline"}} />
    
    <Popover
      id={id}
      open={open}
      sx={{height: "auto"}}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        
      }}
      
    >
      <div style={{ padding: 10, backgroundColor: 'rgb(44,44,44)', textAlign: "center", color: "white"}} >
      <form onSubmit={SubmitChange} style={{position: "relative"}} > 
              {InputForm === 'password'? <Fragment> <input style={{left: 0, position: "absolute"}} type={inputText} ref={ConfirmRef} /><br />  </Fragment> : ''}
              <input type={inputText} ref={ThisRef} style={{ marginTop: "10px"}} /> <FontAwesomeIcon icon={faCheck} style={{transform: "scale(1.50)", marginLeft: 10}} onClick={SubmitChange} />
              </form>
          </div>
          
    </Popover>
  </Fragment>
  )
}

export default ChangeInput