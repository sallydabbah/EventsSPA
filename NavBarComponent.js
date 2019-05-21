import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Form, Badge } from "react-bootstrap";

import WishContext from './WishContext';

import HomeComponent from './HomeComponent';
import EventsComponent from './EventsComponent';
import WishesComponent from './WishesComponent';
import JoinComponent from './JoinComponent';

class NavBarComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return  <Navbar expand="lg">
                    <Navbar.Brand href="#home">Best Wishes!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="navbarClass" to="/" exact activeClassName="text-warning">Home</NavLink>
                            <NavLink className="navbarClass" to="/events" activeClassName="text-warning">Events</NavLink>
                            <NavLink className="navbarClass" to="/wishes" activeClassName="text-warning">Wishes</NavLink>
                            <NavLink className="navbarClass" to="/about" activeClassName="text-warning">About</NavLink>
                        </Nav>
                        <Form inline>
                            {!this.context.name ?
                            <>
                            <NavLink className="navbarClass" to="/join" activeClassName="text-warning">Join</NavLink>
                            <NavLink className="navbarClass" to="/Login" activeClassName="text-warning">Login</NavLink>
                            </>
                            : 
                            <button className="navbarClass" onClick={() => this.context.logout()}>Logout</button>}
                            {this.context.name && 
                                <>Hi <Badge variant="secondary">{this.context.name}</Badge></>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
        
        
        
        
        // <Navbar className="navbarBackground">
        //     <Row>
        //         <Col md={8}>
        //             <NavLink className="navbarClass" to="/" exact activeClassName="text-warning">Home</NavLink>
        //             <NavLink className="navbarClass" to="/events" activeClassName="text-warning">Events</NavLink>
        //             <NavLink className="navbarClass" to="/wishes" activeClassName="text-warning">Wishes</NavLink>
        //             <NavLink className="navbarClass" to="/about" activeClassName="text-warning">About</NavLink>

        //         </Col>
        //         <Col md={4}>
        //             <NavLink className="navbarClass" to="/join" activeClassName="text-warning">Join</NavLink>
        //             <NavLink className="navbarClass" to="/Login" activeClassName="text-warning">Login</NavLink>
        //             {/* Hi {this.context.name}! */}
        //         </Col>
        //     </Row>

        // </Navbar>

    }
}

NavBarComponent.contextType = WishContext;

export default NavBarComponent;