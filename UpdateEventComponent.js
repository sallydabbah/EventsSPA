import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputGroup, Button } from "react-bootstrap";
import { faLocationArrow, faCalendar, faTag, faList } from "@fortawesome/free-solid-svg-icons";

import validator, { field } from './validator';
import WishContext from './WishContext';
import * as api from './api';



export default class UpdateEventComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            category: field({ value: '', name: 'category' }),
            title: field({ value: '', name: 'title', minLength: 2 }),
            date: field({ value: '', name: 'date' }),
            where: field({ value: '', name: 'where', minLength: 2 }),
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        api.getEvent(this.props.match.params.eventID)
            .then(userEvent => localStorage.setItem("userEvent", JSON.stringify(userEvent)));
        setTimeout(() => {
            const userEvent = JSON.parse(localStorage.getItem('userEvent'));
            const event = Object.assign({}, this.state);
            for (let key in event) {
                if (key != "userEvent") {
                    event[key].value = userEvent[key];
                }
            }
            this.setState({ ...event });
        }, 500);
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
            if (key != "userEvent") {
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
            alert("successfully updated");
        }
    }
    render() {
        return <>
            <div className="container">
                <Form style={{ height: 250, margin: "80px 300px  0px 300px" }} onSubmit={this.onSubmit} >
                    <h1 className="font-weight-bold">Update Event <span style={{ color: "red" }}>{this.state.title.value}</span></h1>
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
                                value={this.state.category.value}
                                onChange={this.onInputChange}
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
                                defaultValue={this.state.title.value}
                            />
                        </InputGroup>
                        {this.state.title.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="font-weight-bold">Date</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faCalendar} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                name="date"
                                type="date"
                                placeholder="Enter Event Date"
                                onBlur={this.onInputChange}
                                defaultValue={this.state.date.value}
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
                                defaultValue={this.state.where.value}
                            />
                        </InputGroup>
                        {this.state.where.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white" }} type="submit">Save Changes</Button>
                </Form>
            </div>
        </>;
    }
}
UpdateEventComponent.contextType = WishContext;