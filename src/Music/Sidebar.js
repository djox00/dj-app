import React from 'react'
import styled from './Sidebar.module.scss'
import { animated, useSpring } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { useEffect } from 'react'
import Video from './Video'
import { getFirestore, collection, addDoc } from '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Confirm from '../UI/Confirm'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SidebarVisibleAction } from '../redux/actions/SidebarToggleAction'



const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ';

const Sidebar = () => {

  const dispatch = useDispatch(); 
  const SidebarVisible = useSelector(state=>state.SidebarReducer); 


  const [isMobile, setIsMobile] = useState(false)
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  const [clickedVideo, setclickedVideo] = useState({
   video_id: '',
   videoTitle: '',

  }); 


  if(SidebarVisible){
    document.body.style.overflow = 'hidden';   
  }
  if(!SidebarVisible){
    document.body.style.overflow = 'auto';
  }



  const sidebar = useSpring({
    transform: SidebarVisible ? "translateX(50%)" : "translateX(-50%)",
    config: { duration: isMobile ? 300 : 600 }
  });
  const backdrop = useSpring({
    visibility: SidebarVisible ? "visible" : "hidden",
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


  let videoList = videos.map((video) => { return <Video key={video.etag} setConfirmVideo={setConfirmVideo}  setclickedVideo={setclickedVideo} videoID={video.id.videoId} /> });


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
if(User!=null){
  var {displayName, photoURL, uid} = User;
 }




const db = getFirestore(); 
const queueRef = collection(db,"queue"); 


useEffect(() => {
  
  if(ConfirmVideo.addVideo){ 

    addToQueue(displayName,photoURL,uid,clickedVideo.video_id,clickedVideo.videoTitle); 
  }

setConfirmVideo((prev)=>{return{...prev,addVideo: false }});
 
}, [ConfirmVideo.addVideo]);







const addToQueue = (displayName, photoURL, uid, videoid, videoTitle) =>{  
  
  try {

    addDoc(queueRef, {
      videoid: videoid,
      videotitle: videoTitle,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL
    });
   
  } catch (e) {
    console.error("Error adding document: ", e);
  }}





  return (

    <React.Fragment>

      {ReactDOM.createPortal(
      <animated.div style={backdrop} >
<div className={styled.backdrop} > 
        <animated.div style={sidebar} >
            <div className={styled.sidebar}>

            <Confirm value="add" ConfirmVideo={ConfirmVideo}  setConfirmVideo={setConfirmVideo}> Do you want to add this video to the play queue? </Confirm>
              <div className={styled.close}><FontAwesomeIcon onClick={()=>dispatch(SidebarVisibleAction())} className={styled['close-button']} icon={faXmark} /></div>
              <div className={styled['search-field']}>   <input type="text" ref={UserInput} onKeyUp={onKeyPressHandler} /> <FontAwesomeIcon className={styled['search-icon']} icon={faSearch} onClick={onKeyPressHandler} /></div>
              <div className={styled['search-result']}>{videoList ? videoList : ''} </div>
            </div>
          </animated.div> 
          </div>
          </animated.div> ,document.getElementById("sidebar"))}
        
    </React.Fragment>
  )
}

export default Sidebar