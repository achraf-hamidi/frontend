import React from 'react'
import {Navbar,Nav,container,Row,NavDropdown,Form,FormControl,Button}from'react-bootstrap'
import {LinkContainer}from 'react-router-bootstrap'
function Header() {
    return (
        
            <header>
                <Navbar bg="light" expand="lg">
                <LinkContainer to ='/'>

                     <Navbar.Brand >E-Vente</Navbar.Brand>
      
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to ='/cart'>
                    <Nav.Link><i className="fas fa-shopping-cart"></i>Carte</Nav.Link>

                    </LinkContainer>
                    <LinkContainer to ='/login'>
                    <Nav.Link ><i className="fas fa-user"></i>Login</Nav.Link>

                    </LinkContainer>
                
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>
            </header>
        
    )
}

export default Header
