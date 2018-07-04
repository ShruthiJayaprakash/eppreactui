import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBarPortal extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">Engineering Provisioning Portal</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/portal">
                            Home
                        </NavItem>
                        {/* <Navbar.Link href="#">Home</Navbar.Link> */}
                        <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>{"userename"}</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}>User Group : {"data"}</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} href="/login">LOGOUT</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}