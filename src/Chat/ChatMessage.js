import React ,{ useState} from 'react'
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import styled from './ChatMessage.module.scss';
const ChatMessage = (props) => {



    const [User, setUser] = useState(''); 
    onAuthStateChanged(auth,(currentUser)=>{ 
      setUser(currentUser); 
    })
  



  
    const { displayName, text, uid, photoURL, createdAt} = props.message;
    let messageClass = 'received'; 
    let date = new Date(createdAt?.seconds * 1000).toUTCString(); // need to implement
  
  
  
    if(User!=null){   
     messageClass = (uid === User.uid) ? 'sent' : 'received';
    }
  
    return (<>
      {(displayName && messageClass!=='sent')? (
              <div className={styled.displayName} >{displayName } </div>
            ) : null}
      <div className={`${styled.message} ${styled[messageClass]} `}>
        
        <img src={photoURL || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} />
       
      <p>{text}</p>
      </div>
  
  
    </>)













}

export default ChatMessage