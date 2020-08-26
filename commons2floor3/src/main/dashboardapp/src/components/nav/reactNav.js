import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
    
import "./nav.css";




class ReactNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      render() {
        return (
            <Navbar expand="md" varient="dark" >
            <Navbar.Brand href="/"><h1 className="text-white">Commons2Floor3</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/teams">
                        Meet the team
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/contact">
                        Contact
                    </Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}
    
  
  
  export default ReactNav;