import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from "react-bootstrap";

import HomeComponent from './HomeComponent';
import EventsComponent from './EventsComponent';
import WishesComponent from './WishesComponent';
import JoinComponent from './JoinComponent';

export default class NavBarComponent extends React.Component {
    constructor() {
        super();
        this.state={
            selectedWish:1
        }

    }
    render() {
        let mywish="/wishes/"+this.state.selectedWish;
        return <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to={mywish}>Wishes</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/join">Join</NavLink>
        <NavLink to="/Login">Login</NavLink>
      </div>;
    }
}
