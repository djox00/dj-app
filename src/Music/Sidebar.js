import React from 'react'
import styled from './Sidebar.module.css'
import { animated, useSpring } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import YTSearch from 'youtube-api-search'
import { useRef } from 'react'
import { useState } from 'react'
const API_KEY = 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ'; 

const Sidebar = ({toggle,setToggle}) => {

    

    const sidebar = useSpring({
        transform: toggle ? "translateX(50%)" : "translateX(-50%)",
        config: {duration: 600}
    });
console.log(toggle)

    const backdrop = useSpring({
        visibility : toggle ? "visible" : "hidden",
        config: {duration: 0}
    });

    const changeToggle = () =>{ 

        setToggle((toggle)=>{ return !toggle}); 
       }


const [videos, setvideos] = useState({}); 

       async function getVideos (input) { 

        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=10&order=relevance&q=${input}&key=${API_KEY}`); 
        const videos = await response.json(); 
       console.log(videos);
       



      }




      const videoSearch = (term) => {
        YTSearch({key: 'AIzaSyAaJqC70Z5FvaOtwtKvHc_RJ5hh86fa6dQ', term: term}, (videos) => {
          console.log(videos)
          
        
      
        })
      };  


   
      const UserInput = useRef();
      const onKeyPressHandler = (event) => {
          
          const search = UserInput.current.value;
      
          if (event.key === 'Enter' || event.type === 'click') {
            getVideos(search); 
              UserInput.current.value = '';
           
          };
      }
      
      

   
  return (
   <React.Fragment>
<animated.div style={backdrop}>   
<div className={styled.backdrop}>
<animated.div style={sidebar} >    
<div className={styled.sidebar}> 

   <div className={styled.close}><FontAwesomeIcon onClick={changeToggle} className={styled['close-button']} icon={faXmark} /></div>


<div className={styled['search-field']}>   <input type="text" ref={UserInput} onKeyUp={onKeyPressHandler}  /> <FontAwesomeIcon className={styled['search-icon']} icon={faSearch} onClick={onKeyPressHandler} /></div>




<div className={styled['search-result']}>d </div>




</div>
</animated.div>
</div>
</animated.div>

   </React.Fragment>
  )
}

export default Sidebar