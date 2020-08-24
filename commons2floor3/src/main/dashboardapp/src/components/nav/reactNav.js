import React, { Component } from 'react';
import {Link, Router} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
    
import "./nav.css";




class ReactNav extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        return (
            <Navbar expand="md" variant="dark">
            <Navbar.Brand href="/" className="text-white" ><h1>Commons2Floor3</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <li className="nav-item active">
                    <Nav.Link className="nav-link" >
                        <Link to="/">
                            Home
                        </Link>
                    </Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link className="nav-link">
                        <Link to="/team">
                            Meet the team
                        </Link>
                    </Nav.Link>
                </li>
                <li className="nav-item">
                    <Nav.Link className="nav-link" >
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </Nav.Link>
                </li>
                <li className="nav-item ">
                    <Nav.Link className="nav-link">
                        <Link to="/contact">
                            Contact
                        </Link>
                    </Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}
    
  
  
  export default ReactNav;