import React from 'react';
import styled from './NavBar.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompactDisc, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    return (
        <React.Fragment>

<Navbar className={styled.navBar} collapseOnSelect expand="lg" bg="dark" variant="dark"  >
 
  <div className={styled['dj-room']}>   <Navbar.Brand href='Home' ><FontAwesomeIcon icon={faCompactDisc} /> Music Room</Navbar.Brand></div>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border : "none", boxShadow : "none"}} />
  <Navbar.Collapse id="responsive-navbar-nav" c>
    <Nav style={{marginLeft: "20px"}} >
      <Nav.Link href="features">Features</Nav.Link>
      <Nav.Link href="pricing">Pricing</Nav.Link>
    
    </Nav>
    
    <Nav.Link className={styled.login} href="Login"><FontAwesomeIcon className={styled['login-icon']} icon={faUserAstronaut} />Login</Nav.Link>
  
  </Navbar.Collapse>

  
</Navbar>

  
        </React.Fragment>
    );
};

export default NavBar;