import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.scss"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='text-title'>বাইতুল মাল(بيت المال)</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-dark fw-bold">
                        <Link to="/home" className='m-2 text-decoration-none text-dark'>Home</Link>
                        <Link to="/financce" className='m-2 text-decoration-none text-dark'>Finance</Link>
                        <Link to="/event" className='m-2 text-decoration-none text-dark'>Event</Link>
                        <Link to="/payment" className='m-2 text-decoration-none text-dark'>Payment</Link>
                        <Link to="/news" className='m-2 text-decoration-none text-dark'>News</Link>
                        <Link to="/signin" className='m-2 text-decoration-none text-dark'><span className=' border px-2 py-1 bg-sign text-white'>Log-in</span></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;