import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Nav } from "react-bootstrap";

export default class NavBarComponent extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (<Router>

            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/events">Event</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link to="/wishes">wishes</Nav.Link>
                </Nav.Item>
            </Nav>
        </Router>
        );
    }
}