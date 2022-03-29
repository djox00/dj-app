import React from 'react'
import styled from './Sidebar.module.css'
import { animated, useSpring } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({toggle,setToggle}) => {


    const sidebar = useSpring({
        transform: toggle ? "translateX(50%)" : "translateX(-50%)",
        config: {duration: 600}
    });
console.log(toggle)

    const backdrop = useSpring({
        Display : toggle ? "block" : "none",
        opacity: toggle ? 1 : 0, 
        config: {duration: 0}
    });

    const changeToggle = () =>{ 

        setToggle((toggle)=>{ return !toggle}); 
       }



   
  return (
   <React.Fragment>
<animated.div style={backdrop}>   
<div className={styled.backdrop}>
<animated.div style={sidebar} >    
<div className={styled.sidebar}> 

   <div className={styled.close}><FontAwesomeIcon onClick={changeToggle} className={styled['close-button']} icon={faXmark} /></div>


<div className={styled['search-field']}>   <input type="text"  /> <FontAwesomeIcon className={styled['search-icon']} icon={faSearch} /></div>









</div>
</animated.div>
</div>
</animated.div>

   </React.Fragment>
  )
}

export default Sidebar