import React, { Fragment, useRef } from 'react'
import styled from './Video.module.scss'
import { useEffect, useState } from 'react';
import Confirm from '../UI/Confirm';
const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ'; 


const Video = ({videoID,setclickedVideo,setConfirmVideo}) => {

  const VideoRef = useRef(); 

const [Details, setDetails] = useState([]); 

   /*  async function getVideosDetails (input) { 

        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=BLPd_AYS4FA&part=contentDetails&key=${API_KEY}`); 
        const videosDetails = await response.json(); 
        console.log(
          videosDetails
        );
    
      } */

 
const [VideoTitle, setVideoTitle] = useState(''); 


async function getVideosDetails (input) { 

  const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${input}&key=${API_KEY}`); 
  const data = await response.json(); 
  setVideoTitle(data.items[0].snippet.title); 

}

  getVideosDetails(videoID); 


const onClickHandler = () =>{
  setclickedVideo(()=>{return {video_id: videoID, videoTitle:  VideoTitle }}); 

    setConfirmVideo((prev)=>{return {...prev, boxVisible: true}}); 
  
}


   
  return (
    <Fragment>  
   
   <div className={styled['image-container']} onClick={onClickHandler} ref={VideoRef}>         
  
    <img  alt={`https://img.youtube.com/vi/${videoID}/sddefault.jpg`} src={`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`} /> 
    <p>{VideoTitle}</p>
   </div>
   
         

    </Fragment>
  )
}

export default Video