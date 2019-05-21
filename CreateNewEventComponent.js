import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Form, InputGroup, Button, Table } from "react-bootstrap";
import { faLocationArrow, faCalendar, faTag, faList } from "@fortawesome/free-solid-svg-icons";

import validator, { field } from './validator';
import MyEventsComponent from './MyEventsComponent';

export default class CreateNewEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            category: field({ value: '', name: 'category' }),
            titleEvent: field({ value: '', name: 'titleEvent', minLength: 2 }),
            at: field({ value: '', name: 'at' }),
            where: field({ value: '', name: 'where', minLength: 2 }),
        }
        this.onClickAtMyEvents = this.onClickAtMyEvents.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
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
    onClickAtMyEvents() {
        this.setState({
            myEvents: true
        }, () => console.log(this.state));
    }
    onSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
        for (let key in event) {
            const { value, validations } = event[key];
            const { valid, errors } = validator(value, key, validations);
            if (!valid) {
                event[key].valid = valid;
                event[key].errors = errors;
            }
        }
        this.setState({ ...event });
        //Send data to somewhere 
        if (this.state.category.errors.length == 0 && this.state.titleEvent.errors.length == 0 && this.state.at.errors.length == 0 && this.state.where.errors.length == 0) {
            const myNewEvent = {
                ID: parseInt(this.props.lastEventID) + 1,
                title: this.state.titleEvent.value,
                catagory: this.state.category.value,
                date: this.state.at.value,
                where: this.state.where.value
            }
            this.props.AddNewEventFunc(myNewEvent);
        }
       
    }
    render() {
        return <>
            {this.state.myEvents ? <>
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
                                    {this.props.userEvents.map(({ ID, title, catagory, date, where }, i) => <MyEventsComponent key={i} ID={ID} title={title} catagory={catagory} date={date} where={where} />)}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </center>
            </> : <>
                    <div className="container">
                        <Form style={{ height: 250, margin: "80px 300px  0px 300px" }} onSubmit={this.onSubmit} >
                            <h1 style={{ color: "white" }} className="font-weight-bold">Create New Event</h1>
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
                                        id="titleEvent"
                                        name="titleEvent"
                                        placeholder="Enter Title Event"
                                        onBlur={this.onInputChange}
                                    />
                                </InputGroup>
                                {this.state.titleEvent.errors.map((err, i) => (
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
                                        id="at"
                                        name="at"
                                        type="Date"
                                        placeholder="Enter Title Date"
                                        onBlur={this.onInputChange}
                                    />
                                </InputGroup>
                                {this.state.at.errors.map((err, i) => (
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
                            <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white", marginRight: 20 }} onClick={this.onClickAtMyEvents}>My Events</Button>
                            <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white" }} type="submit">Create New Event Box</Button>
                        </Form>
                    </div>
                </>}
        </>;
    }
}
