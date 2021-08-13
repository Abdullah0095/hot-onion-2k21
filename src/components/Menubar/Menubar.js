import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Menubar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">BOOTSTRAP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Nav >
                       <a href="">Login</a>
                       <Button id="menuButton" variant="danger">Sign Up</Button>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;