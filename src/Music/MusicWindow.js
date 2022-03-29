import React, { useState } from 'react';
import styled from './MusicWindow.module.css'
import YouTube from 'react-youtube';
import YTSearch from 'youtube-api-search'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ'; 




const MusicWindow = ({setToggle}) => {
  
  
   const changeToggle = () =>{ 

    setToggle((toggle)=>{ return !toggle}); 
   }

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const [videoID, setVideID] = useState("");

  let videoArray = ['bla','bla2']; 

  const [videosArray, setvideosArray] = useState(videoArray); 


const checkElapsedTime = (e) => {
  const duration = e.target.getDuration();
  const currentTime = e.target.getCurrentTime();
  if (currentTime / duration > 0.95) {
 
  }
};



const videoSearch = (term) => {
  YTSearch({key: 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ', term: term}, (videos) => {
    console.log(videos)
    
  

  })
}



async function getVideos (input) { 

  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=10&order=relevance&q=sasa%20kovacevic&key=${API_KEY}`); 
  const videos = await response.json(); 
  console.log(
    videos
  );


}

videoSearch("sasa kovacevic"); 
  

// get video details to handle when the next video plays along 
  async function getVideosDetails (input) { 

    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=BLPd_AYS4FA&part=contentDetails&key=${API_KEY}`); 
    const videosDetails = await response.json(); 
    console.log(
      videosDetails
    );
  
  }
  






    return (
        <React.Fragment>
    
          <div className={styled['video-container']}>   
          <YouTube opts={opts}
            videoId={videoID}
            onStateChange={(e) => checkElapsedTime(e)}
            className={styled.video}
          />
      </div>
      <div className={styled['queue-container']}>   
     <p> Queue: </p> <div className={styled['add-track-button']}> <button onClick={changeToggle}>  <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCompactDisc}/>   </button>  </div>
      <div className={styled.queue}> 
      
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
<p> dsadsa</p>
      
      </div>
      </div>
        </React.Fragment>
    );
};

export default MusicWindow;