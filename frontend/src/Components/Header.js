import React from 'react' 
import {Navbar,Nav,container,Row,NavDropdown,Form,FormControl,Button}from'react-bootstrap'

function Header() {
    return (
        <div>
            <header>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">E-Vente</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i>Carte</Nav.Link>
      <Nav.Link href="#link"><i className="fas fa-user"></i>Login</Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </header>
        </div>
    )
}

export default Header
