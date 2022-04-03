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


const db = getFirestore(); 
  const queueRef = collection(db,"queue"); 
const q = query(queueRef,orderBy('createdAt'),limitToLast(25)); 



  const queue = useFirestoreQuery(q); 



const removeFromqueue = () =>{

  deleteDoc(doc(db,"queue",queue[0].id));

}
  




    return (

        <React.Fragment>
          <div className={styled['video-container']}>   
          <YouTube opts={opts}
            videoId={queue[0]?.videoid}
            onStateChange={(e) => checkElapsedTime(e)}
            className={styled.video}
            onEnd={removeFromqueue} 
          />
      </div>
      <div className={styled['queue-container']}>   
     <p> Queue: </p> <div className={styled['add-track-button']}> <button onClick={SBcontext.SBtoggle}>  <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCompactDisc}/>   </button>  </div>
      <div className={styled.queue}> 
      
{queue && queue.map((data)=>{return (<p>   <img src={data.photoURL || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} /> {data.videotitle}  </p>)}) }
      
      </div>
      </div>
        </React.Fragment>
    );
};

export default MusicWindow;