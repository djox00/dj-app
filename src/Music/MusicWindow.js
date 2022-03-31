import React, { useState } from 'react';
import styled from './MusicWindow.module.css'
import YouTube from 'react-youtube';
import YTSearch from 'youtube-api-search'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import SideBarToggleContext from '../StateProviders/siderbar-toggle';
const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ'; 




const MusicWindow = () => {


const SBcontext = useContext(SideBarToggleContext); 
  
  
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
     <p> Queue: </p> <div className={styled['add-track-button']}> <button onClick={SBcontext.SBtoggle}>  <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCompactDisc}/>   </button>  </div>
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