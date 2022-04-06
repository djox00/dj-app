import React from 'react';
import styled from './NavBar.module.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompactDisc, faUserAstronaut, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { signOut,onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useState } from 'react';

const NavBar = (props) => {
const [User, setUser] = useState(null); 
  onAuthStateChanged(auth,(currentUser)=>{ setUser(currentUser); })

console.log(User); 

const logout = async () =>{ 
  await signOut(auth); 
}

    return (
        <React.Fragment>

<Navbar className={styled.navBar} collapseOnSelect expand="lg" bg="dark" variant="dark"  >
 
  <div className={styled['dj-room']}>   <Navbar.Brand href='Home' ><FontAwesomeIcon icon={faCompactDisc} /> Music Room</Navbar.Brand></div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border : "none", boxShadow : "none"}} />
  <Navbar.Collapse id="responsive-navbar-nav" c={true}>
    <Nav style={{marginLeft: "20px"}} >
      <Nav.Link href="Rules">Rules</Nav.Link>
      <Nav.Link href="Info">Info</Nav.Link>
      <Nav.Link href="MyProfile">My Profile</Nav.Link>
    
    </Nav>
    
    <div className={styled.login}> {User==null ? <Nav.Link className={styled['login-text']} href="Login"><FontAwesomeIcon className={styled['login-icon']} icon={faUserAstronaut} />Login</Nav.Link> : <Nav.Link className={styled['logout-text']} onClick={logout} > <FontAwesomeIcon  icon={faArrowRightFromBracket} /> Log out </Nav.Link>}   </div>
  
  </Navbar.Collapse>

  
</Navbar>

  
        </React.Fragment>
    );
};

export default NavBar;