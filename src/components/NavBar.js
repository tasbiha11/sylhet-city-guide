import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../logo.svg";


function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className='bg-dark text-white'>
            <Container fluid >
                <img src={logo} alt="logo" style={{ width: '35px' }} />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='text-white text-uppercase ml-5'>Home</Nav.Link>
                        <Nav.Link href="#action2" className='text-white text-uppercase ml-5'>Contact</Nav.Link>
                        <Nav.Link href="#action2" className='text-white text-uppercase ml-5'>News</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar