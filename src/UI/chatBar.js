import React from 'react';
import styled from './ChatBar.module.css'
import { useState, useEffect, useReducer, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const ChatBar = () => {

const [message, setmessage] = useState(''); 
  const UserInput = useRef();

  const onKeyPressHandler = (event) => {
      const searchValue = UserInput.current.value;

      if (event.key === 'Enter' || event.type === 'click') {
        setmessage(searchValue);
          UserInput.current.value = '';
      };

  }

console.log(message); 


    return (
        <React.Fragment>
        <div className={styled.frame}>   
        <div className={styled["chat-container"]}>   
          <div className={styled["message-window"]}>
          </div>

          <div  class={styled["message-input"]}>   
        <input  ref={UserInput} type="text" placeholder="Write a message..." onKeyPress={onKeyPressHandler}  />
        <FontAwesomeIcon className={styled["message-send"]} icon={faLocationArrow} onClick={onKeyPressHandler} />
  </div>
        </div>
        </div>

            
      </React.Fragment>
    );
};

export default ChatBar;