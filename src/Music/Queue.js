import React, { Fragment, useContext } from 'react'
import styled from './Queue.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase-config';
import {useDispatch} from 'react-redux'
import {SidebarVisible} from '../redux/actions/SidebarToggleAction.js'

const Queue = (props) => {

    const dispatch = useDispatch(); 

  return (
    <Fragment> 
    <div className={styled['queue-container']}>  

    {auth.currentUser!=null ? <div className={styled['add-track-button']}> <button onClick={()=>dispatch(SidebarVisible())}>  <FontAwesomeIcon className={styled.plus} icon={faPlus} /> <FontAwesomeIcon className={styled.disc} icon={faCompactDisc}/>   </button>  </div> : ''   }
    <br/><p> Queue: </p> 
      <div className={styled.queue}> 
      {props.children}
      </div>
      </div>

    </Fragment>
  )
}

export default Queue