import React from 'react';
import { Navbar,Container, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


 
const Navigation = () => {
const{user,logout}=useAuth()
    return (
      
  <Navbar className="" collapseOnSelect expand="lg"  sticky="top" bg="dark" variant="dark">
  <Container >
  <Navbar.Brand >
      <img
        src="https://cdn.shopify.com/s/files/1/1811/9385/files/logo_3afeb311-69a5-48c2-bc5c-3f9885c05965_300x300.png?v=1613038705"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className='text-light nav-link p-4 ' to="/home">Home</Link>
    
      <Link className='text-light nav-link p-4' to="/products">Products</Link>
      
      <Link className='text-light nav-link p-4' to="/review">Reviews</Link>
      <Link className='text-light nav-link p-4' to="/about">About</Link>
      <Link className='text-light nav-link p-4' to="/addService">Add Service</Link>
     
      
      
      
    </Nav>
  </Navbar.Collapse>
   <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         {user?.displayName?  <Button variant="dark" onClick={logout}>Log out</Button>:<Link className='text-light nav-link p-4' to="/login">Log In</Link>
         }
      </Navbar.Text>
    </Navbar.Collapse> 
  </Container>
</Navbar>
      
    );
};

export default Navigation;