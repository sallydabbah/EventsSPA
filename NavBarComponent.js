import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from "react-bootstrap";

import HomeComponent from './HomeComponent';
import EventsComponent from './EventsComponent';
import WishesComponent from './WishesComponent';
import JoinComponent from './JoinComponent';

export default class NavBarComponent extends React.Component {
    constructor() {
        super();

    }
    render() {
        return <div>

            <Navbar className="navbarBackground">
                
                <NavLink className="navbarClass" to="/" exact activeClassName="text-warning">Home</NavLink>
                <NavLink className="navbarClass" to="/events" activeClassName="text-warning">Events</NavLink>
                <NavLink className="navbarClass" to="/wishes" activeClassName="text-warning">Wishes</NavLink>
                <NavLink className="navbarClass" to="/about" activeClassName="text-warning">About</NavLink>
                <NavLink className="navbarClass" to="/join" activeClassName="text-warning">Join</NavLink>
                <NavLink className="navbarClass" to="/Login" activeClassName="text-warning">Login</NavLink>

            </Navbar>

        </div>;
    }
}
