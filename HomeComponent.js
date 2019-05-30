import React from 'react';
import { Button, ButtonToolbar, Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './general.css'
import WishContext from './WishContext';

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Users: [],
            userId: 1,
            userIsLoggedIn: true
        };
        this.addNewEvent = this.addNewEvent.bind(this);
    }

    addNewEvent(newEvent) {
        alert("a new event was added successfully");
        var CopyEvents = this.state.Users;
        CopyEvents[this.state.userId - 1].events.push(newEvent);
        this.setState({
            Users: [...CopyEvents]
        }, function () {
            this.state.Users.map((item) => console.log(item));
        });
    }
    
    render() {

        return <>
            <div className="login-box" style={{ width: "800px", height: "300px", top: "40%" }}>
                <div className="col"><h3 style={{ color: "white", textAlign: "center" }} className="font-weight-bold">Welcome to bestWishes</h3></div>
                <ButtonToolbar>
                    <NavLink className="navbarClass" to="/CreateNewEvent" activeClassName="text-warning">
                        <Button className="font-weight-bold" style={{ border: "2px solid white", marginTop: "100px" }} onClick={this.createNewEventBox} variant="primary" size="lg">
                            Create A New Event Box
                        </Button>
                    </NavLink>
                    <NavLink className="navbarClass" to="/events" activeClassName="text-warning">
                        <Button className="font-weight-bold" style={{ border: "2px solid white", marginTop: "100px" }} onClick={this.addABestwishe} variant="primary" size="lg">
                            Create A Best Wish
                        </Button>
                    </NavLink>
                    <NavLink className="navbarClass" to={"/UserEvents/" + this.context.userID} activeClassName="text-warning">
                        <Button className="font-weight-bold" style={{ border: "2px solid white", marginTop: "100px" }} variant="primary" size="lg">
                            View My Events
                        </Button>
                    </NavLink>
                </ButtonToolbar>
            </div>

        </>

    }
}
HomeComponent.contextType = WishContext;