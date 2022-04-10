import React, { useState, Suspense, lazy } from 'react';
import styled from './MusicWindow.module.scss'
import { useFirestoreQuery } from '../costumHooks/firebase-hooks';
import { deleteDoc, doc, limitToLast } from 'firebase/firestore';
import { query, collection, getFirestore, orderBy } from 'firebase/firestore';
import VolumeSlider from '../Small-UI-components/VolumeSlider';
import Queue from './Queue';
import Loading from '../Small-UI-components/Loading';
const YouTube = lazy(()=> import('react-youtube'));


const MusicWindow = () => {


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
    console.log(e.target)
  }
  const limitDuration = (e) => {
    const duration = e.target.getDuration();
    if (duration > 420) {
      deleteDoc(doc(db, "queue", queue[0].id));   // if video is longer than 8 minutes It will be skipped 

    }
  }

  const [MusicVolume, setMusicVolume] = useState(1);


  return (

    <React.Fragment>
<Suspense fallback={<Loading>Loading...</Loading>}>
      <div className={styled['video-container']}>

      
        <YouTube opts={opts}
          videoId={queue[0]?.videoid}
          onStateChange={playVideo}
          className={styled.video}
          onEnd={removeFromqueue}
          onReady={limitDuration}
        />
         
        <div className={styled.volume}> <VolumeSlider setMusicVolume={setMusicVolume} />   </div>
        <p><span style={{ color: "rgb(36, 180, 108)" }}> Now playing:  </span>  <img src={queue[0]?.photoURL || `https://avatars.dicebear.com/api/initials/${queue[0]?.displayName}.svg` || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} alt={'error'} /> {queue[0]?.videotitle} </p>
      </div>



    
        <Queue>
          {queue && queue.slice(1).map((data) => { return (<p key={data.videoid}>   <img src={data.photoURL || `https://avatars.dicebear.com/api/initials/${data?.displayName}.svg`} alt="error" /> {data.videotitle}  </p>) })}
        </Queue>
  
        </Suspense>
    </React.Fragment>
  );
};

export default MusicWindow;