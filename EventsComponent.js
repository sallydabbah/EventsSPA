import React from 'react';
import { InputGroup, DropdownButton, FormControl, Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import validator, { field } from './validator';
import * as api from './api';
import './general.css'
import SearchedEventComponent from './SearchedEventComponent';


export default class EventsComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            category: field({ value: '', name: 'category' }),
            inputId: field({ value: '', name: 'inputId' }),
            FromDate: field({ value: '', name: 'FromDate' }),
            ToDate: field({ value: '', name: 'ToDate' }),
            where: field({ value: '', name: 'where', minLength: 2 }),
            events: [],
            wishes: [],
            searchedID: '',
            searchedEventFlag: false,
            rowIsClicked: false,
            wishIsAdded: false
        };
        this.rowClick = this.rowClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.getEvent = this.getEvent.bind(this);
    }
    getEvent(id) {
        const event = this.state.events.find(e => e.ID === id);
        return event;
    }
    onInputChange({ target: { name, value } }) {
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                ...validator(value, name, this.state[name].validations)
            }
        });
    }
    rowClick() {
        this.props.history.push("/event/" + this.state.inputId.value);
        this.setState({ rowIsClicked: true });
    }
    componentDidMount() {
        api.getEvents()
            .then(events => this.setState({ events }));
        api.getWishes()
            .then(wishes => this.setState({ wishes }));
    }
    render() {
        {
            return <>
            <center>
            <h1 style={{ color: "red" }} className="font-weight-bold">Search Event</h1>
                <InputGroup className="mb-3" style={{ width: "50%" }}>
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="FilterBy"
                        id="input-group-dropdown-1"
                    >
                        <Form style={{ height: "540px", width: "400px" }}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label className="font-weight-bold">Select Category</Form.Label>
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
                                {this.state.category.errors.map((err, i) => (
                                    <Form.Text key={i} className="text-danger">
                                        {err}
                                    </Form.Text>
                                ))}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="font-weight-bold">From Date</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faCalendar} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id="FromDate"
                                        name="FromDate"
                                        type="Date"
                                        placeholder="Enter From Date"
                                        onBlur={this.onInputChange}
                                    />
                                </InputGroup>
                                {this.state.FromDate.errors.map((err, i) => (
                                    <Form.Text key={i} className="text-danger">
                                        {err}
                                    </Form.Text>
                                ))}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="font-weight-bold">To Date</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <FontAwesomeIcon icon={faCalendar} />
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        id="ToDate"
                                        name="ToDate"
                                        type="Date"
                                        placeholder="Enter To Date"
                                        onBlur={this.onInputChange}
                                    />
                                </InputGroup>
                                {this.state.ToDate.errors.map((err, i) => (
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
                            <Button variant="primary" >
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </Button>
                        </Form>
                    </DropdownButton>
                    <FormControl
                        aria-describedby="basic-addon1"
                        placeholder="Search Event By ID"
                        name="inputId"
                        onBlur={this.onInputChange}
                    />
                    {this.state.inputId.errors.map((err, i) => (
                        <Form.Text key={i} className="text-danger">
                            {err}
                        </Form.Text>
                    ))}
                    <Button style={{ height: "38px" }}>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faSearch} />
                        </InputGroup.Text>
                    </Button>
                </InputGroup>
                </center>
                {
                    this.state.inputId.value ? <>
                        <div className="col-md">
                            <center>
                                <div>
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
                                            {
                                                <SearchedEventComponent ID={this.getEvent(this.state.inputId.value).ID} title={this.getEvent(this.state.inputId.value).title} catagory={this.getEvent(this.state.inputId.value).catagory} date={this.getEvent(this.state.inputId.value).date} func={this.rowClick} where={this.getEvent(this.state.inputId.value).where} />
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </center>
                        </div>

                    </> : ''
                }
            </>;
        }
    }
}   
