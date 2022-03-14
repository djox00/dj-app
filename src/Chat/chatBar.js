import React from 'react';
import styled from './ChatBar.module.css'
import { useState, useEffect, useReducer, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import 'firebase/firestore'; 
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import 'firebase/database'; 
import { getDatabase, set , ref, onValue, Database } from 'firebase/database';
import { collection, CollectionReference, doc, Firestore, setDoc } from 'firebase/firestore';





const ChatBar = () => {

  /* function writeUserData(name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'messages/'), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });}

  writeUserData('DJole','dsadsa','testest'); 
  

  const db = getDatabase();
  const starCountRef = ref(db, 'messages/');
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });


  writeUserData(21,'Ddsaole','dsadsa','testest');  */




  const db = getDatabase();
  
  CollectionReference collectionReference = FirebaseFirestore.getInstance().collection("public_messages");



    const setdata = async () =>{ 
     await setDoc(doc(messagesRef, "/messages"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] }); 
    }

    setdata(); 
  









  const [User, setUser] = useState(''); 
  onAuthStateChanged(auth,(currentUser)=>{ 
    setUser(currentUser); 
  })




const [message, setmessage] = useState(''); 
  const UserInput = useRef();

  const onKeyPressHandler = (event) => {
      const msg = UserInput.current.value;

      if (event.key === 'Enter' || event.type === 'click') {
        setmessage(msg);
          UserInput.current.value = '';
      };

  }

console.log(message); 


let msgField = <div  class={styled["message-input"]}>   
<input  ref={UserInput} type="text" placeholder="Write a message..." onKeyPress={onKeyPressHandler}  />
<FontAwesomeIcon className={styled["message-send"]} icon={faLocationArrow} onClick={onKeyPressHandler} />
</div> 



    return (
        <React.Fragment>
        <div className={styled.frame}>   
        <div className={styled["chat-container"]}>   
          <div className={styled["message-window"]}>
          </div>

         {User!=null ? msgField : ''}
        </div>
        </div>

            
      </React.Fragment>
    );
};

export default ChatBar;