import React, { Fragment } from 'react'
import styled from './Confirm.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useSpring, animated } from 'react-spring'




const Confirm = (props) => {

 

    const popup = useSpring({
        visibility: props.ConfirmVideo.boxVisible  ? "visible" : "hidden",
        config: { duration: 0 }
      });

      const closeBox = () =>{
        props.setConfirmVideo((prev)=>{return {...prev, boxVisible: false}}); 
      }

      const ConfirmVideo = () =>{
        props.setConfirmVideo(()=>{return {boxVisible: false,  addVideo: true,}}); 
      }

  return (
    <Fragment>
 <animated.div style={popup}>   
     <div className={styled.frame}  > 
     <div className={styled.close}><FontAwesomeIcon icon={faXmark} onClick={closeBox} /></div>
     <p> {props.children}  </p>
    <div className={styled.center}> <button onClick={ConfirmVideo} style={{backgroundColor: props.bgColor}} > <span> {props.value}  </span> </button>  </div> 
     </div>    
     </animated.div>
    
    </Fragment>
  )
}

export default Confirm