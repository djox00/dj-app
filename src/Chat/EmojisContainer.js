import React, {useState, Fragment, useEffect} from 'react'
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import styled from './Emojis.module.scss'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const EmojisContainer = (props) => {



    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
      };
    
      const handleClickAway = () => {
        setOpen(false);
      };


    



  return (
    <Fragment>
<ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
      
    >   


<Box sx={{ position: 'relative', width: "80px", display: 'inline' }}>
       
        <FontAwesomeIcon className={styled["emoji-icon"]} style={{color: "rgb(33, 37, 41,0.75)", position: "absolute", left: -25, top: 2, transform: "scale(1.4)"}}   icon={faFaceSmile} onClick={handleClick} /> 
        
        
        {open ? (
          
          <span>
             {props.children}
          </span>
        ) : null}
      </Box>

  




    </ClickAwayListener>

    </Fragment>
  )
}

export default EmojisContainer


