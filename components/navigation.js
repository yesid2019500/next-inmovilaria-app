import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark"  fixed="top" expand="lg">
      <Container>
        <Navbar.Brand >ABC Company </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" href="/" > Home </Link>
            <Link className="nav-link" href="/allproducts"> All projects </Link>
            <Link className="nav-link active" href="/allproducts"> Sign in </Link>
            <Link className="nav-link active" href="/allproducts"> Signout </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation