import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { useState} from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import styledClass from './Settings.module.scss'
import StarsSetting from './Settings/StarsSetting';
import ChatSetting from './Settings/ChatSetting';

const Settings = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };





  return (
    <div>
      <div className={styledClass.container}>
      <Button style={{marginTop: -11, marginRight: 10}}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        <SettingsIcon className={styledClass.icon} />
      </Button></div>
      
      <Menu
        id="fade-menu"
        MenuListProps={{'aria-labelledby': 'fade-button',}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{style:{
          backgroundColor: "rgb(45, 49, 53)"
        }}}
      > 
        <ChatSetting />
        <br /> <hr style={{color: "white", marginTop: -25}} />
         <StarsSetting />
       
      </Menu>
    </div>
  );
}
export default Settings 