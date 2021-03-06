import React from 'react';
import styled from './NavBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserAstronaut, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useState } from 'react';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import { useDispatch } from 'react-redux';
import {MyProfileVisible} from '../redux/actions/MyProfileToggleAction'

const NavBar = (props) => {
const [User, setUser] = useState(''); 

  onAuthStateChanged(auth,(currentUser)=>{ setUser(currentUser); })

const dispatch = useDispatch(); 
const logout = async () =>{ 
  await signOut(auth); 
  window.sessionStorage.clear(); 
}

const SignUp = () =>{

if(User){ 
  return (  <Nav.Link className={styled['logout-text']} onClick={logout} > <FontAwesomeIcon  icon={faArrowRightFromBracket} /> Log out </Nav.Link>   )
}
if(User==null) {return ( <Nav.Link className={styled['login-text']} href="Login"><FontAwesomeIcon className={styled['login-icon']} icon={faUserAstronaut} />Login</Nav.Link>   )}

return(''); 

}



    return (
        <React.Fragment>

<Navbar className={styled.navBar} collapseOnSelect expand="lg" bg="dark" variant="dark"  >
 
  <div className={styled['dj-room']}>   <Navbar.Brand href='Home' ><AudiotrackOutlinedIcon style={{color: "rgba(41, 145, 113, 0.823)", transform: "scale(1.2)"}} /> Music Room</Navbar.Brand></div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border : "none", boxShadow : "none"}} />
  <Navbar.Collapse id="responsive-navbar-nav" c="true">
    <Nav style={{marginLeft: "20px"}} >
      <Nav.Link href="Rules">Rules</Nav.Link>
      <Nav.Link href="Info">Info</Nav.Link>
     {auth.currentUser!=null?  <Nav.Link onClick={()=>dispatch(MyProfileVisible())}  style={{color: "#c04ad8"}} > <FontAwesomeIcon style={{color: "#c04ad8"}} icon={faUserAstronaut}  /> My Profile </Nav.Link> : '' }
    </Nav>
    
    <div className={styled.login}> <SignUp />    </div>
  
  </Navbar.Collapse>

  
</Navbar>

  
        </React.Fragment>
    );
};

export default NavBar;