import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.scss';
import {useEffect, useRef, useState} from "react";
import {Events} from 'react-scroll';
import Sticky from 'react-sticky-el';
import {Button} from "react-bootstrap";

interface IHeader {
    setHeaderHeight: (number) => void;
}

const Header = ({setHeaderHeight}:IHeader) => {

    const headerRef = useRef(null); // Create ref for the stickyHeaderContainer

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight); // Get height of the element
        }
    }, []); // Empty dependency array means it runs once after the initial render

    return (
        <div className="stickyHeaderContainer" ref={headerRef}>
            <Sticky stickyClassName={'header_sticky_state'}
                    boundaryElement=".block"
                    hideOnBoundaryHit={false}>
                <Navbar expand={true}
                        className={`pt-3 pb-3 header_navbar `}>
                    <Container className={"d-flex flex-wrap"}>
                        <Navbar.Brand className={"navbar-logo text-white"} href="#home">TIC.TEREBOVLIA</Navbar.Brand>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto header_nav_menu">
                                    <Nav.Link href="#home">ПРО НАС
                                        <span className={"hover_bl"}></span>
                                    </Nav.Link>
                                    <Nav.Link href="#link">ПОСЛУГИ
                                        <span className={"hover_bl"}></span>
                                    </Nav.Link>
                                    <Button href="#link" className={"border-2 rounded-0"}
                                            variant={"outline-secondary"}>КОНТАКТИ</Button>
                                </Nav>
                            </Navbar.Collapse></div>
                    </Container>
                </Navbar>
            </Sticky>
        </div>
    );
};

export default Header;
