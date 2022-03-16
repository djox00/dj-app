import React from 'react';
import styled from './ChatBar.module.css'
import { useState, useEffect, useReducer, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, getDocs, orderBy, limit, query } from '@firebase/firestore';
import { useFirestoreQuery } from '../costumHooks/firebase-hooks';
import Message from './Message';
import { limitToLast } from 'firebase/firestore';

const ChatBar = () => {

  
 const db = getFirestore(); 
  const messageRef = collection(db,"messages"); 
const addmessage = async (message,displayName,uid,photoURL) =>{  
  
  try {

    const docRef = await addDoc(messageRef, {
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      displayName,
      photoURL
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }}



const q = query(messageRef,orderBy('createdAt'),limitToLast(25)); 
const messages = useFirestoreQuery(q); 
console.log(messages);

useEffect(() => {
  autodown.current.scrollIntoView({ behavior: 'smooth' });
}, [messages])


  const [User, setUser] = useState(''); 
  onAuthStateChanged(auth,(currentUser)=>{ 
    setUser(currentUser); 
  })





  const UserInput = useRef();
  const autodown = useRef(); 
  const onKeyPressHandler = (event) => {
      
  const {displayName, uid, photoURL} = User; 
      const msg = UserInput.current.value;

      if (event.key === 'Enter' || event.type === 'click') {
        addmessage(msg,displayName,uid,photoURL); 
          UserInput.current.value = '';
       
      };
  }




let msgField = <div  className={styled["message-input"]}>   
<input  ref={UserInput} type="text" placeholder="Write a message..." onKeyPress={onKeyPressHandler}  />
<FontAwesomeIcon className={styled["message-send"]} icon={faLocationArrow} onClick={onKeyPressHandler} />
</div> 


function ChatMessage(props) {
  const { displayName, text, uid, photoURL} = props.message;
  let messageClass = 'received'; 

  if(User!=null){   
   messageClass = (uid === User.uid) ? 'sent' : 'received';
  }

  return (<>
    {(displayName && messageClass!=='sent')? (
            <div className={styled.displayName} >{displayName }  </div>
          ) : null}
    <div className={`${styled.message} ${styled[messageClass]} `}>
      
      <img src={photoURL || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'} />
     
    <p>{text}</p>
    </div>



 {/*    <div className={`${styled.message} ${styled[messageClass]} `}>
        <img
        src={photoURL || 'https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png'}
          alt="Avatar"
        />
      
      <div>
        <div className={styled.displayName}>
          {displayName ? (
            <p>{displayName}</p>
          ) : null}

          {createdAt?.seconds ? (
            <span className={styled.displayText}>
             
            </span>
          ) : null}

        </div>
        <p>{text}</p>
      </div>
    </div> */}



  </>)}




    return (
        <React.Fragment>
        <div className={styled.frame}>   
        <div className={styled["chat-container"]}>   
          <div className={styled["message-window"]}>
         <ul>  
          {messages && messages.map(msg => <li> <ChatMessage key={msg.id} message={msg} /></li> )}
          </ul>
            <span ref={autodown}> </span>
          </div>

         {User!=null ? msgField : ''}
        </div>
        </div>

            
      </React.Fragment>
    );
};

export default ChatBar;