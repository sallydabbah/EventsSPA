import React from 'react';
import { Button, ButtonToolbar, Table } from "react-bootstrap";

import './general.css'
import NavBarComponent from './NavBarComponent';
import MyEventsComponent from './MyEventsComponent';
import CreateNewEvent from './CreateNewEventComponent';
import EventsComponent from './EventsComponent';

export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Users: [
                {
                    userId: 1,
                    userName: 'sally@gmail.com',
                    name: 'sally',
                    password: '123',
                    events: [
                        {
                            ID: "1",

                            title: "Birthday",

                            catagory: "Birthday",

                            date: "25/6/2019",

                            where: "sakhnin"

                        },
                        {

                            ID: "2",

                            title: "Birthday",

                            catagory: "Birthday",

                            date: "25/6/2019",

                            where: "sakhnin"

                        },
                        {

                            ID: "3",

                            title: "Birthday",

                            catagory: "Birthday",

                            date: "25/6/2019",

                            where: "sakhnin"

                        }]
                },
                {
                    userId: 2,
                    userName: '2@gmail.com',
                    name: '2',
                    password: '123',
                    events: [
                        {
                            ID: "1",

                            title: "Birthday",

                            catagory: "Birthday",

                            date: "25/6/2019",

                            where: "sakhnin"

                        },
                        {

                            ID: "2",

                            title: "Ebraheem Birthday",

                            catagory: "Birthday",

                            date: "25/6/2019",

                            where: "sakhnin"

                        },
                        {

                            ID: "3",

                            title: "Ebraheem Birthday",

                            catagory: "Birthday",

                            date: "25/6/2019",

                            where: "sakhnin"

                        }]
                }
            ],
            viewMyEvents: false,
            CreateNewEventBox: false,
            AddABestwishe: false,
            userId: 1,
            userIsLoggedIn: true
        };
        this.viewEvents = this.viewEvents.bind(this);
        this.createNewEventBox = this.createNewEventBox.bind(this);
        this.addABestwishe = this.addABestwishe.bind(this);
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
    addABestwishe() {
        this.setState({
            AddABestwishe: true
        }, function () {
            console.log("AddABestwishe is clicked ? " + this.state.AddABestwishe);
        });
    }
    createNewEventBox() {
        this.setState({
            CreateNewEventBox: true
        }, function () {
            console.log("CreateNewEventBox is clicked ? " + this.state.CreateNewEventBox);
        });
    }
    viewEvents() {
        this.setState({
            viewMyEvents: true
        }, function () {
            console.log("events is clicked?" + this.state.viewMyEvents);
            console.log("events:" +

                this.state.Users.filter(user => (user.userId == this.state.userId)));

        });
    }
    render() {

        return <>

            {this.state.viewMyEvents ? <>
                <NavBarComponent />
                <center>
                    <div className="container" >
                        <div className="row">
                            <div className="col"><h1 style={{ color: "red", textAlign: "center", marginTop: "20px" }} className="font-weight-bold">My Events</h1></div>
                            <Table style={{ textAlign: "center", marginTop: "30px" }} className="table tablebackground tableStyle" id="result">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catagory</th>
                                        <th scope="col">Event Title</th>
                                        <th scope="col">When</th>
                                        <th scope="col">Where</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.Users.filter(user => (user.userId == this.state.userId))[this.state.userId - 1].events.map(({ ID, title, catagory, date, where }, i) => <MyEventsComponent key={i} ID={ID} title={title} catagory={catagory} date={date} where={where} />)}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </center>
            </> :

                <>
                    {this.state.CreateNewEventBox ? <> <CreateNewEvent AddNewEventFunc={this.addNewEvent} lastEventID={this.state.Users[this.state.userId - 1].events[this.state.Users[this.state.userId - 1].events.length - 1].ID} userID={this.userId} userEvents={this.state.Users.filter(user => (user.userId == this.state.userId))[this.state.userId - 1].events} /> </> :
                        <>

                            {this.state.AddABestwishe ? <> <EventsComponent /> </> :

                                <>
                                    <NavBarComponent />
                                    <div className="login-box" style={{ width: "790px", height: "300px", top: "40%" }}>
                                        <div className="col"><h3 style={{ color: "#DC143C", textAlign: "center" }} className="font-weight-bold">Welcome to bestWishes</h3></div>
                                        <ButtonToolbar>
                                            <Button className="font-weight-bold" style={{ border: "2px solid white", marginRight: "25px", marginTop: "100px" }} onClick={this.createNewEventBox} variant="primary" size="lg">
                                                Create A New Event Box
                                                    </Button>
                                            <Button className="font-weight-bold" style={{ border: "2px solid white", marginRight: "30px", marginTop: "100px" }} onClick={this.addABestwishe} variant="primary" size="lg">
                                                Create A Best Wish
                                                    </Button>
                                            <Button className="font-weight-bold" style={{ border: "2px solid white", marginTop: "100px" }} onClick={this.viewEvents} variant="primary" size="lg">
                                                View My Events
                                                    </Button>
                                        </ButtonToolbar>
                                    </div>

                                </>
                            }
                        </>
                    }
                </>
            }
        </>;
    }
}
