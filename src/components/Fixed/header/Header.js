import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosContact } from 'react-icons/io';
import logo from '../../../images/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate()


  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="#" className='logo' ><img src={logo} alt='HOTEL STAY' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 ml-5" style={{ maxHeight: '37vh',display:'flex',justifyContent:'space-between' }}>
              <Link to="/">HOME</Link>
              <Link to="About">ABOUT</Link>
              <Link to="Hotels">HOTELS</Link>
              <Link to="Gallery">GALLERY</Link>
              <Link to="ContactUs">CONTACT US</Link>
              <NavDropdown title=<IoIosContact size={30} /> id="basic-nav-dropdown" class="beforelogin">
              <NavDropdown.Item to="SignIn" onClick={()=>navigate('/SignIn')}>SIGN IN</NavDropdown.Item>
              <NavDropdown.Item to="Signup"onClick={()=>navigate('/Signup')} >SIGN UP</NavDropdown.Item></NavDropdown>
              <NavDropdown title="Name" id="basic-nav-dropdown" class="afterlogin">
              <NavDropdown.Item to="MyProfile" onClick={()=>navigate('/MyProfile')}>My Profile</NavDropdown.Item>
              <NavDropdown.Item to="MyBooking" onClick={()=>navigate('/MyBooking')} >My Booking</NavDropdown.Item>
              <NavDropdown.Item to="">Logout</NavDropdown.Item></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  )
}

export default Header;