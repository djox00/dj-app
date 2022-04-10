import React, {lazy, Suspense } from 'react';
import styled from './ChatBar.module.scss'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from '@firebase/firestore';
import { collection, addDoc, orderBy,  query } from '@firebase/firestore';
import { useFirestoreQuery } from '../costumHooks/firebase-hooks';
import { limitToLast } from 'firebase/firestore';
import Loading from '../Small-UI-components/Loading';


const ChatMessage = lazy( () => import('./ChatMessage') ); 


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
      let msg = UserInput.current.value;
      if (event.key === 'Enter' || event.type === 'click') {
        if (/\S/.test(msg)) {
          addmessage(msg,displayName,uid,photoURL); 
      }  
          UserInput.current.value = '';
      };
  }




let msgField = <div  className={styled["message-input"]}>   
<input  ref={UserInput} type="text" placeholder="Write a message..." onKeyPress={onKeyPressHandler}  />
<FontAwesomeIcon className={styled["message-send"]} icon={faRocket} onClick={onKeyPressHandler} />
</div> 




    return (
        <React.Fragment>
        <div className={styled.frame}>   
        <div className={styled["chat-container"]}>   
          <div className={styled["message-window"]}>
          <Suspense fallback={<Loading>Loading...</Loading>}>
         <ul>  
          {messages && messages.map(msg => <li key={msg.id}> <ChatMessage  message={msg} /></li> )}
          </ul>
          </Suspense>
            <span ref={autodown}> </span>
          </div>

         {User!=null ? msgField : ''}
        </div>
        </div>

            
      </React.Fragment>
    );
};

export default ChatBar;