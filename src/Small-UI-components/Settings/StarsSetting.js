import React, { Fragment } from 'react'
import { alpha, styled } from '@mui/material/styles';
import {useDispatch, useSelector} from 'react-redux'
import { StarsToggleHidden, StarsToggleVisible } from '../../redux/actions/StarsToggleAction'; 
import Switch from '@mui/material/Switch';
import styledClass from './StarsSetting.module.scss'

const StarsSetting = () => {


    const StarsVisible = useSelector(state => state.StarsReducer); 
    const dispatch = useDispatch(); 

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
    <Fragment> 
    <div className={styledClass.content}>
 <StarsSwitch 
      checked={StarsVisible}
      onChange={()=>dispatch(StarsVisible? StarsToggleHidden() : StarsToggleVisible())}
      inputProps={{ 'aria-label': 'controlled' }}
      style={{color: "rgb(33, 37, 41)"}}
      
      
    /> <p >Stars animation</p>
       
       </div> 
    </Fragment>
  )
}

export default StarsSetting