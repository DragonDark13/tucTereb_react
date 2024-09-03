import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss';


const Header = () => {
    return (
        <Navbar  sticky={"top"} bg="dark" data-bs-theme="dark" expand={true} className="pt-3 pb-3">
            <Container>
                <Navbar.Brand href="#home">TIC.TEREBOVLIA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">ПРО НАС</Nav.Link>
                        <Nav.Link href="#link">ПОСЛУГИ</Nav.Link>
                        <Nav.Link href="#link">КОНТАКТИ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
