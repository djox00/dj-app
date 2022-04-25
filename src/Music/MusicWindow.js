import React, { useState, lazy, Suspense} from 'react';
import styled from './MusicWindow.module.scss'
import { useFirestoreQuery } from '../costumHooks/firebase-hooks';
import { deleteDoc, doc, limitToLast, updateDoc, arrayUnion } from 'firebase/firestore';
import { query, collection, getFirestore, orderBy } from 'firebase/firestore';
import VolumeSlider from '../Small-UI-components/VolumeSlider';
import Queue from './Queue';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Loading from '../Small-UI-components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';
const YouTube = lazy(()=> import("react-youtube"))


const MusicWindow = () => {

const [User, setUser] = useState(''); 
onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser); 
})

    const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      autohide: 1,
      showinfo: 0,
      wmode: 'opaque',
      rel: 0,
    },
  };

const admin = window.sessionStorage?.getItem("admin");  

  const db = getFirestore();
  const queueRef = collection(db, "queue");
  const q = query(queueRef, orderBy('createdAt'), limitToLast(25));

  const queue = useFirestoreQuery(q);


  const removeFromqueue = () => {
  deleteDoc(doc(db, "queue", queue[0].id));
  }

  const playVideo = (e) => {
    e.target.setVolume(MusicVolume);
    e.target.playVideo();
  }

  const limitDuration = (e) => {
    const duration = e.target.getDuration();
    if (duration > 420) {
      deleteDoc(doc(db, "queue", queue[0].id));   // if video is longer than 8 minutes It will be skipped 
    }
  }

  const [MusicVolume, setMusicVolume] = useState(50);

  const [like, setlike] = useState(false);


const LikeHandler = () =>{
if (!like){
setlike(!like); 
updateDoc(doc(db,"queue",queue[0]?.id),{likes : arrayUnion(User.uid)   })
}
} 


  return (

    <React.Fragment>

      <div className={styled['video-container']}>
       <Suspense fallback={<Loading />}> 
        <YouTube opts={opts}
          videoId={queue[0]?.videoid}
          onStateChange={playVideo}
          className={styled.video}
          onEnd={removeFromqueue}
          onReady={limitDuration}
          
        />
        </Suspense>  
              
        <div className={styled.volume}> <VolumeSlider setMusicVolume={setMusicVolume} /> {admin ? <FontAwesomeIcon onClick={()=>{ deleteDoc(doc(db, "queue", queue[0].id))}}  className={styled.foward} icon={faForwardStep} /> : '' }    </div>   

       <span style={{color: "white"}}>    {queue[0]?.likes?.length} </span> 
      {queue[0] ? (!like ? <FavoriteBorderIcon onClick={LikeHandler} style={{color: "white"}}/>   : <FavoriteIcon style={{color: "white"}} /> ) : ''}
                                     
      {queue[0] ?  <p> <span style={{ color: "rgb(36, 180, 108)" }}> Now playing:    </span>    <img src={queue[0]?.photoURL || `https://avatars.dicebear.com/api/initials/${queue[0]?.displayName}.svg` || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} alt={'error'} /> <span style={{ color: "rgb(223, 79, 245)", fontWeight: "bold" }}>{queue[0]?.displayName}</span>  | {queue[0]?.videotitle} </p> : ''}
    
      </div>

        <Queue>
          {queue && queue.slice(1).map((data) => { return (<p key={data.videoid}>   <img src={data.photoURL || `https://avatars.dicebear.com/api/initials/${data?.displayName}.svg`} alt="error" /> {data.videotitle}  </p>) })}
        </Queue>
  
 
    </React.Fragment>
  );
};

export default MusicWindow;