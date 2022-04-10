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
     <p> Queue: </p> <div className={styled['add-track-button']}> <button onClick={SBcontext.SBtoggle}>  <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faCompactDisc}/>   </button>  </div>
      <div className={styled.queue}> 
      {props.children}
      </div>
      </div>

    </Fragment>
  )
}

export default Queue