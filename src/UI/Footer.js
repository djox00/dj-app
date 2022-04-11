import React, {Fragment, useState, useEffect} from 'react'; 
import styled from './Footer.module.scss'; 
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SettingsIcon from '@mui/icons-material/Settings';



const Footer = (props) => {


  


  const [value, setValue] = useState('/Home');

useEffect(() => {
  setValue(window.location.pathname);
}, [])



  return (
     <Fragment>   
     
     <div className={styled.footer}>   
      <CssBaseline  />
     
      <Box
        component="footer"
        sx={{
          py: 5,
          px: 0,
          mt: 'auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 50,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark'
              ? "green"
              : "rgb(33, 37, 41)",
              
        }}
      >
        <hr />
        <BottomNavigation sx={{ maxWidth: "auto", backgroundColor: 'transparent', paddingTop: 5, paddingBottom: 2}} value={value} >
      <BottomNavigationAction
        label="Music Room"
        value="/Home"
        href="/Home"
        style={{color: "rgba(41, 145, 113, 0.823)", transform: "scale(1.1)"}}
        icon={<AudiotrackOutlinedIcon style={{color: "white", transform: "scale(1.2)"}} />}
      />
      <BottomNavigationAction
        label="Rules"
        value="/Rules"
        href="/Rules"
        style={{color: "rgba(41, 145, 113, 0.823)", transform: "scale(1.1)"}}     
        icon={<DensityMediumIcon style={{color: "white", transform: "scale(1.2)"}} />}
      />
      <BottomNavigationAction
        label="My profile"
        value="/MyProfile"
        href="/MyProfile"
        style={{color: "rgba(41, 145, 113, 0.823)", transform: "scale(1.1)"}}  
        icon={<AccountBoxRoundedIcon style={{color: "white", transform: "scale(1.2)"}} />}
      />
      <BottomNavigationAction
       label="Folder"
        value="folder"
        style={{color: "rgba(41, 145, 113, 0.823)", transform: "scale(1.1)"}}
         icon={<SettingsIcon style={{color: "white", transform: "scale(1.2)"}} />} /> 
    </BottomNavigation>





        
      </Box>
      
  
      </div>
    </Fragment>
  )
}

export default Footer