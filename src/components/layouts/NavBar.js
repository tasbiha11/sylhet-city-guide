import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../logo.svg";
import {
    Link
} from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { MdContacts } from 'react-icons/md';
import { FaNewspaper } from 'react-icons/fa';
import { BsFillPinMapFill } from 'react-icons/bs';



function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className='bg-dark text-white'>
            <Container fluid >
                {/* <img src={logo} alt="logo" style={{ width: '35px' }} /> */}
                <h4><BsFillPinMapFill className='w-7 mr-5 mb-1 me-2' />Sylhet City Guide </h4>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/" className='text-white text-uppercase ml-5'><AiFillHome className='w-7 mr-5 mb-1 me-2' />Home</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" className='text-white text-uppercase ml-5'><MdContacts className='w-7 mr-5 mb-1 me-2' />Contact</Nav.Link>
                        <Nav.Link as={Link} to="/news" className='text-white text-uppercase ml-5'><FaNewspaper className='w-7 mr-5 mb-1 me-2' />News</Nav.Link>


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