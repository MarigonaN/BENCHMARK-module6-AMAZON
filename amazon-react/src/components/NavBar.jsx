import React, { Component } from 'react';
import { NavDropdown, Navbar, Nav} from "react-bootstrap"
class NavBar extends Component {

    render() {
        return (
           
            <Navbar style={{backgroundColor: "black"}}>
                <Navbar.Brand href="#home"><img src="https://youarecurrent.com/wp-content/uploads/2014/08/Amazon-Logo-schwarz.jpg" style={{width: "100px"}}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => console.log("fetch everything")}>Home</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => this.fetchCategory("smartphones")}>Smarphones</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.fetchCategory("watches")}>Watches</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => this.fetchCategory("bikes")}>Bikes</NavDropdown.Item>
                        </NavDropdown>
                  
                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           
        );
    }
}

export default NavBar;