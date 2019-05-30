import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup, Button } from "react-bootstrap";
import { faLocationArrow, faCalendar, faTag, faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

import validator, { field } from './validator';
import WishContext from './WishContext';
import * as api from './api';

export default class CreateNewEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            category: field({ value: '', name: 'category' }),
            title: field({ value: '', name: 'title', minLength: 2 }),
            date: field({ value: '', name: 'date' }),
            where: field({ value: '', name: 'where', minLength: 2 }),
            userEvents: [],
            events: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        api.getEvents()
            .then(events => this.setState({ events }));
        api.getUserEventsByUserID(this.context.userID)
            .then(userEvents => this.setState({ userEvents }));
    }
    onInputChange({ target: { name, value } }) {
        console.log(name, value);
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                ...validator(value, name, this.state[name].validations)
            }
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
        for (let key in event) {
            if (key != "userEvents" && key != "events") {
                const { value, validations } = event[key];
                const { valid, errors } = validator(value, key, validations);
                if (!valid) {
                    event[key].valid = valid;
                    event[key].errors = errors;
                }
            }
        }
        this.setState({ ...event });
        if (this.state.category.errors.length == 0 && this.state.title.errors.length == 0 && this.state.date.errors.length == 0 && this.state.where.errors.length == 0) {
            const myNewEvent = {
                userID: this.context.userID,
                ID: parseInt(this.state.events[this.state.events.length - 1].ID) + 1,
                title: this.state.title.value,
                category: this.state.category.value,
                date: this.state.date.value,
                where: this.state.where.value
            }
            alert("added successfully");
            this.setState(prevState => ({ events: [...prevState.events, myNewEvent] }), function () {
                this.state.events.map((item) => {
                    console.log(item.ID);
                });
            });
            this.setState(prevState => ({ userEvents: [...prevState.userEvents, myNewEvent] }), function () {
                this.state.userEvents.map((item) => {
                    console.log(item.ID);
                });
            });
        }
    }
    render() {
        return <>
            <div className="container">
                <Form style={{ height: 250, margin: "80px 300px  0px 300px" }} onSubmit={this.onSubmit} >
                    <h1 style={{ color: "red" }} className="font-weight-bold">Create New Event</h1>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">Category</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faList} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                id="category"
                                name="category"
                                onBlur={this.onInputChange}
                            >
                                <option value="">Choose...</option>
                                <option value="New Born">New Born</option>
                                <option value="Wedding">Wedding</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Party">Party</option>
                            </Form.Control>
                        </InputGroup>
                        {this.state.category.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">Title</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faTag} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                id="title"
                                name="title"
                                placeholder="Enter Title Event"
                                onBlur={this.onInputChange}
                            />
                        </InputGroup>
                        {this.state.title.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">At</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faCalendar} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                id="date"
                                name="date"
                                type="Date"
                                placeholder="Enter Title Date"
                                onBlur={this.onInputChange}
                            />
                        </InputGroup>
                        {this.state.date.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">Where</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLocationArrow} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                id="where"
                                name="where"
                                placeholder="Enter Event Position"
                                onBlur={this.onInputChange}
                            />
                        </InputGroup>
                        {this.state.where.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white" }} type="submit">Create New Event Box</Button>
                    <NavLink className="navbarClass" to={"/UserEvents/" + this.context.userID} activeClassName="text-warning">
                        <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white", marginRight: 20 }}>My Events</Button>
                    </NavLink>
                </Form>
            </div>
        </>;
    }
}
CreateNewEvent.contextType = WishContext;