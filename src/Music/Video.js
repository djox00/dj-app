import React, { Fragment } from 'react'
import styled from './Video.module.css'
import { useEffect, useState } from 'react';
const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ'; 


const Video = ({videoID}) => {


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


useEffect(() => {
 
  getVideosDetails(videoID); 

}, [])  


    console.log(videoID); 
  return (
    <Fragment>  
   
   <div className={styled['image-container']}> 
   
    <img  alt={`https://img.youtube.com/vi/${videoID}/sddefault.jpg`} src={`https://img.youtube.com/vi/${videoID}/hqdefault.jpg`} /> 
    <p>{VideoTitle}</p>
   </div>
   
         

    </Fragment>
  )
}

export default Video