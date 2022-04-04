import React, { useState } from 'react';
import styled from './MusicWindow.module.css'
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import SideBarToggleContext from '../StateProviders/siderbar-toggle';
import { useFirestoreQuery } from '../costumHooks/firebase-hooks';
import { deleteDoc, doc, limitToLast } from 'firebase/firestore';
import { query, collection, getFirestore, orderBy } from 'firebase/firestore';
import VolumeSlider from '../Small-UI-components/VolumeSlider';
import { useRef } from 'react';
const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ'; 

const MusicWindow = () => {


const SBcontext = useContext(SideBarToggleContext); 
  
  
  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      autohide: 1,
      showinfo : 0, 
      wmode: 'opaque',
      rel: 0,
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


const db = getFirestore(); 
  const queueRef = collection(db,"queue"); 
const q = query(queueRef,orderBy('createdAt'),limitToLast(25)); 



  const queue = useFirestoreQuery(q); 



const removeFromqueue = () =>{

  deleteDoc(doc(db,"queue",queue[0].id));

}
  
const playVideo = (e) =>{
e.target.setVolume(MusicVolume);
e.target.playVideo();


}

const [MusicVolume, setMusicVolume] = useState(1); 

const video = useRef(); 




    return (

        <React.Fragment>
        
          <div className={styled['video-container']}>  
         
          <YouTube opts={opts}
            videoId={queue[0]?.videoid}
            onStateChange={playVideo}
            className={styled.video}
            onEnd={removeFromqueue} 
         
           
          
            
          />
          <div className={styled.volume}> <VolumeSlider setMusicVolume={setMusicVolume}  />   </div>
          <p><span style={{color: "rgb(36, 180, 108)"}}> Now playing:  </span>  <img src={queue[0]?.photoURL || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} /> {queue[0]?.videotitle} </p>
              
      </div>
      <div className={styled['queue-container']}>   
     <p> Queue: </p> <div className={styled['add-track-button']}> <button onClick={SBcontext.SBtoggle}>  <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCompactDisc}/>   </button>  </div>
      <div className={styled.queue}> 
      
{queue && queue.slice(1).map((data)=>{return (<p>   <img src={data.photoURL || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} /> {data.videotitle}  </p>)}) }
      
      </div>
      </div>
        </React.Fragment>
    );
};

export default MusicWindow;