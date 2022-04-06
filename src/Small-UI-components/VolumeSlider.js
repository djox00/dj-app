import React, { Fragment } from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow, faVolumeHigh,faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import styled from './VolumeSlider.module.scss'
const VolumeSlider = ({setMusicVolume}) => {
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const [finalVolume, setfinalVolume] = useState(1);
    setTimeout(()=>{
         setfinalVolume(()=>{return muted ? 0 : volume}) 
         setMusicVolume(finalVolume); 

        },500);
    
  
const volumeIcon = () =>{
    if(!finalVolume){return faVolumeXmark }
    if(finalVolume < 25){return faVolumeLow }
    if(finalVolume > 25) {return faVolumeHigh}

}

    return (




      
      <Fragment>  
 <FontAwesomeIcon icon={volumeIcon()} className={styled['volume-icon']} onClick={() => setMuted((m) => !m)} />

         
          <input 
          
            type="range"
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={(event) => {
                
              setVolume(event.target.valueAsNumber);
            }}
          />
         
         
      
 
         
        
          </Fragment>
    );
}

export default VolumeSlider