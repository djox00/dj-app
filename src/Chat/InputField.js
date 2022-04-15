import React, { Fragment, useState } from 'react'
import styled from './InputField.module.scss'; 
import EmojisContainer from './EmojisContainer';
import 'emoji-mart/css/emoji-mart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Picker } from 'emoji-mart'





const InputField = ({onMessageAddHandler }) => {

const [text, settext] = useState(''); 


const handleChange = (e) =>{
    settext(e.target.value); 
}

const handleSubmit = e =>{
    e.preventDefault()
    
    onMessageAddHandler(text); 

    settext(''); 


}


const addEmoji = e => {
    let emoji = e.native;
    settext( 
    (text) =>text + emoji

    );
  };


  return (
    <Fragment>

<div  className={styled["message-input"]}>   
<form onSubmit={handleSubmit}>   
<input 
onChange={handleChange}
value={text}
type="text" placeholder="Write a message..."   />

<EmojisContainer>  <Picker style={{position: "absolute", bottom: 40, left: -300}} onSelect={addEmoji} />    </EmojisContainer>

<FontAwesomeIcon type="submit"   className={styled["message-send"]}  icon={faRocket} onClick={handleSubmit}  />

</form>
</div> 



    </Fragment>
  )
}

export default InputField