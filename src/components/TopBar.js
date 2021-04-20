import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Profile from '../images/img_avatar.png';

const ContactChip = () => {
    return (
        <>
            <style type="text/css">
                {`
                    .chip {
                        display: inline-block;
                        padding: 0 25px;
                        height: 50px;
                        font-size: 16px;
                        line-height: 50px;
                        border-radius: 25px;
                        background-color: #f1f1f1;
                      }
                      
                    .chip img {
                        float: left;
                        margin: 0 10px 0 -25px;
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                    }
                `}
            </style>
            <div class="chip">
                <img src={Profile} alt="Person" width="96" height="96"></img>
                Ethan Alvizo
            </div>       
        </>
    )
}

const TopBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Wellness Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <ContactChip/>
                    
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopBar
