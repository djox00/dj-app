import React, { Fragment, useContext } from 'react'
import styled from './Queue.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import SideBarToggleContext from '../StateProviders/siderbar-toggle';


const Queue = (props) => {

    const SBcontext = useContext(SideBarToggleContext); 


  return (
    <Fragment> 
    <div className={styled['queue-container']}>  
    <div className={styled['add-track-button']}> <button onClick={SBcontext.SBtoggle}>  <FontAwesomeIcon className={styled.plus} icon={faPlus} /> <FontAwesomeIcon className={styled.disc} icon={faCompactDisc}/>   </button>  </div> 
    <br/><p> Queue: </p> 
      <div className={styled.queue}> 
      {props.children}
      </div>
      </div>

    </Fragment>
  )
}

export default Queue