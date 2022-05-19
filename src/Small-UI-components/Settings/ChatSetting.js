import React, { Fragment } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from './ChatSetting.module.scss'
import { useDispatch, useSelector  } from 'react-redux';
import {SetChatColorBlue, SetChatColorPink, SetChatColorGreen} from '../../redux/actions/ChatCholorHandler'

const ChatSetting = () => {

const dispatch = useDispatch(); 
const chatColor = useSelector(state=>state.ChatColorReducer); 

console.log(Boolean(window.sessionStorage.getItem("stars"))); 

  return (
      <Fragment> 
        <div className={styled.content}>   
      
    <ButtonGroup className={styled['button-container']}  >
    <Button id={styled["blue-theme"]} style={chatColor==='BLUE_THEME'? {border: 'solid 2px white'} : {}}  onClick={()=>dispatch(SetChatColorBlue())} ></Button>
    <Button id={styled["green-theme"]} style={chatColor==='GREEN_THEME'? {border: 'solid 2px white'} : {}} onClick={()=>dispatch(SetChatColorGreen())} ></Button>
    <Button id={styled["pink-theme"]} style={chatColor==='PINK_THEME'? {border: 'solid 2px white'} : {}} onClick={()=>dispatch(SetChatColorPink())}></Button>
    
  </ButtonGroup>
  <p>Chat color theme</p>
  </div>
  </Fragment>
  )
}

export default ChatSetting