import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Menubar = () => {
    return (
        <div>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">BOOTSTRAP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Nav >
                        <FontAwesomeIcon id="awesomeFont"  icon={faShoppingCart} />
                        <a href="#login">Login</a>
                        <Button id="menuButton" variant="danger">Sign Up</Button>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;