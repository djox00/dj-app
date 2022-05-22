import React,{useRef} from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import styled from './MyProfile.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../../firebase-config';
import { updateProfile } from 'firebase/auth';


const PictureInput = ({seterror}) => {
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


const SubmitChange = async (e) =>{
    e.preventDefault(); 
    try{
      if( !isImage(URL.current.value)) throw new Error("Image URL not valid!")
      await  updateProfile(auth.currentUser, { photoURL: URL.current.value });
      seterror(()=>{return {message: '', status: false}}); 
    }catch(error){
      
      seterror(()=>{return {message: error.message, status: true}}); 
    }
   
handleClose(); 

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
          <div style={{ padding: 10, backgroundColor: 'rgb(44,44,44)', textAlign: "center", color: "white"}} >
              New Photo URL    <br/>
              <form onSubmit={SubmitChange} > 
              <input type="text" ref={URL} /> <FontAwesomeIcon icon={faCheck} style={{transform: "scale(1.50)", marginLeft: 10}} onClick={SubmitChange} />
              </form>
              </div>
              
        </Popover>
      </div>
    );
}

export default PictureInput