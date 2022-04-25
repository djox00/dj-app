import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { useState, useContext, useEffect } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from '@mui/material/Switch';
import ToggleContext from '../StateProviders/siderbar-toggle';



const StarsToggle = () => {


  const toggleContext = useContext(ToggleContext); 

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


const iconStyle ={
color: "white",
transform: window.innerWidth>615 ?  "scale(1.2)" : "scale(1)"

}



  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsIcon style={iconStyle} />
      </Button>
      
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
      
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        
        <Switch 
      checked={toggleContext.stars}
      onChange={toggleContext.toggleStars}
      inputProps={{ 'aria-label': 'controlled' }}
    /> <p style={{padding : "0px 10px", display: "inline"}}>Stars</p>
       
      </Menu>
    </div>
  );
}
export default StarsToggle