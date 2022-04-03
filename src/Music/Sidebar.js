import React from 'react'
import styled from './Sidebar.module.css'
import { animated, useSpring } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef, useContext, useState } from 'react'
import { useEffect } from 'react'
import Video from './Video'
import { getFirestore, collection, addDoc } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import SideBarToggleContext from '../StateProviders/siderbar-toggle'
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Confirm from '../UI/Confirm'



const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ';

const Sidebar = () => {

  const SBcontext = useContext(SideBarToggleContext);
  const [clickedVideo, setclickedVideo] = useState({
   video_id: '',
   videoTitle: '',

  }); 


  const sidebar = useSpring({
    transform: SBcontext.SBvisible ? "translateX(50%)" : "translateX(-50%)",
    config: { duration: 600 }
  });
  const backdrop = useSpring({
    visibility: SBcontext.SBvisible ? "visible" : "hidden",
    config: { duration: 0 }
  });



  const [videos, setvideos] = useState([]);

  const [ConfirmVideo, setConfirmVideo] = useState({
    boxVisible: false, 
    addVideo: false,
   })

  async function getVideos(input) {

    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=5&order=relevance&q=${input}&key=${API_KEY}`);
    const videos = await response.json();
    setvideos(videos.items);
  }



  let videoList = videos.map((video) => { return <Video setConfirmVideo={setConfirmVideo}  setclickedVideo={setclickedVideo} videoID={video.id.videoId} /> });




  const UserInput = useRef();
  const onKeyPressHandler = (event) => {
    const search = UserInput.current.value;
    if (event.key === 'Enter' || event.type === 'click') {
      getVideos(search);
      UserInput.current.value = '';
    };
  }


  const [User, setUser] = useState(''); 
  onAuthStateChanged(auth,(currentUser)=>{ 
    setUser(currentUser); 
  })

const {displayName, photoURL, uid} = User;



const db = getFirestore(); 
const queueRef = collection(db,"queue"); 


useEffect(() => {
  
  if(ConfirmVideo.addVideo){ 

    addToQueue(displayName,photoURL,uid,clickedVideo.video_id,clickedVideo.videoTitle); 
  }

setConfirmVideo((prev)=>{return{...prev,addVideo: false }});
 
}, [ConfirmVideo.addVideo]);







const addToQueue = async (displayName, photoURL, uid, videoid, videoTitle) =>{  
  

  try {

    const docRef = await addDoc(queueRef, {
      videoid: videoid,
      videotitle: videoTitle,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }}







  return (
    <React.Fragment>
        
      <animated.div style={backdrop}>
        <div className={styled.backdrop}>
          <animated.div style={sidebar} >
            <div className={styled.sidebar}>
            <Confirm value="add" ConfirmVideo={ConfirmVideo}  setConfirmVideo={setConfirmVideo}> Do you want to add this video to the play queue? </Confirm>
              <div className={styled.close}><FontAwesomeIcon onClick={SBcontext.SBtoggle} className={styled['close-button']} icon={faXmark} /></div>
              <div className={styled['search-field']}>   <input type="text" ref={UserInput} onKeyUp={onKeyPressHandler} /> <FontAwesomeIcon className={styled['search-icon']} icon={faSearch} onClick={onKeyPressHandler} /></div>
              <div className={styled['search-result']}>{videoList ? videoList : ''} </div>
            </div>
          </animated.div>
        </div>
      </animated.div>

    </React.Fragment>
  )
}

export default Sidebar