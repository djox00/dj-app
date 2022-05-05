import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import { useState} from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from '@mui/material/Switch';
import styledClass from './StarsToggle.module.scss'
import { alpha, styled } from '@mui/material/styles';
import {useDispatch, useSelector} from 'react-redux'
import { StarsToggleAction } from '../redux/actions/StarsToggleAction'; 

const StarsToggle = () => {

  const StarsVisible = useSelector(state => state.StarsReducer); 
  const dispatch = useDispatch(); 

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StarsSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "rgb(33, 37, 41)",
      '&:hover': {
        backgroundColor: alpha("rgb(33, 37, 41)", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "rgb(33, 37, 41)",
      
    },
    
  }));



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
          backgroundColor: "rgb(27, 131, 100)"
        }}}
      > 
        
        <StarsSwitch 
      checked={StarsVisible}
      onChange={()=>dispatch(StarsToggleAction())}
      inputProps={{ 'aria-label': 'controlled' }}
      style={{color: "rgb(33, 37, 41)"}}
      
      
    /> <p style={{padding : "0px 10px", display: "inline", color: "white"}}>Stars</p>
       
      </Menu>
    </div>
  );
}
export default StarsToggle