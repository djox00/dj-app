import React,{useRef} from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import styled from './MyProfile.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase-config';
import { updateProfile } from 'firebase/auth';


const PictureInput = ({setPictureChanged}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    const URL = useRef(); 

   const  isImage =  (url) => {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
      }


const SubmitChange = (e) =>{
    e.preventDefault(); 
    handleClose(); 
    
   
console.log(isImage(URL.current.value))

 if( isImage(URL.current.value)){
    updateProfile(auth.currentUser, { photoURL: URL.current.value });
    setPictureChanged(()=> Math.random()); 
}

}



    return (
      <div>
       
        <div className={styled.text} onClick={handleClick}>Change image</div>
        
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          
        >
          <Typography sx={{ p: 2, bgcolor: 'rgb(44,44,44)' }} >
              New Photo URL    <br/>
              <form onSubmit={SubmitChange} > 
              <input type="text" ref={URL} /> <FontAwesomeIcon icon={faCheck} style={{transform: "scale(1.50)", marginLeft: 10}} onClick={SubmitChange} />
              </form>
              </Typography>
              
        </Popover>
      </div>
    );
}

export default PictureInput