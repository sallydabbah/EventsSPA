import React from 'react';
import { InputGroup, DropdownButton, FormControl, Button, Form, Table, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendar, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import validator, { field } from './validator';
import * as api from './api';
import './general.css'
import SearchedEventComponent from './SearchedEventComponent';
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'


import { ENGINE_METHOD_PKEY_ASN1_METHS } from 'constants';


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
            searchedevents: [],
            searchedID: '',
            filtered: false,
            searchedEventFlag: false,
            rowIsClicked: false,
            wishIsAdded: false,
            show: false
        };
        this.rowClick = this.rowClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.getEvent = this.getEvent.bind(this);
        this.Filtering = this.Filtering.bind(this);
        this.FilterEvents = this.FilterEvents.bind(this);
        this.onIdChange = this.onIdChange.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState((prevState) => ({
            show: false,
            ...prevState.items
        }));
    }

    handleShow() {
        this.setState((prevState) => ({
            show: true,
            ...prevState.items
        }));
    }
    onIdChange({ target: { name, value } }) {

        this.setState({
            filtered: false,
            [name]: {
                ...this.state[name],
                value,
                ...validator(value, name, this.state[name].validations)
            }
        });

    }
    Filtering(event) {
        event.preventDefault();
        this.FilterEvents(event);
        this.refs.Byid.blur();
        this.setState((prevState) => ({
            filtered: true,
            show: false,
            searchedevents: JSON.parse(localStorage.getItem('FilteredEvents'))
            , ...prevState.items
        }))
        this.state.inputId.value = '';
        
    }
    FilterEvents(event) {
        let RightSearch = []
        this.state.events.forEach(e => {
            console.log(`e.category = ${e.category}, e.where = ${e.where}, category="${category.value}, where=${where.value}`);
           
             if((category.value && ToDate.value) && (FromDate.value && where.value)) {

                if(((category.value == e.category) && (ToDate.value >= e.date)) && ((FromDate.value <= e.date) && (e.where == where.value ))){
                     RightSearch.push(e);
             }}
             
             else if ((category.value && ToDate.value) && (FromDate.value)) {
                if((category.value == e.category) && ((ToDate.value >= e.date) && (FromDate.value <= e.date)))
                RightSearch.push(e);

             }
             else if ((category.value && ToDate.value)&&(where.value)) {
                if(((category.value == e.category) && (ToDate.value >= e.date))  && (e.where == where.value )){
                     RightSearch.push(e);
             }}
             else if((category.value && FromDate.value) &&(where.value)) {
                if(((category.value == e.category)  && (FromDate.value <= e.date)) && (e.where == where.value )){
                     RightSearch.push(e);
             }}
             else if ((FromDate.value && ToDate.value) && (where.value )) {
                if( ((ToDate.value >= e.date) && (FromDate.value <= e.date)) && (e.where == where.value )){
                     RightSearch.push(e);
             }}
             else if(category.value && FromDate.value ) {
                if((category.value == e.category) &&(FromDate.value <= e.date )){
                     RightSearch.push(e);
             }}
             else if(category.value && ToDate.value) {
                if(category.value == e.category){
            if (ToDate.value >= e.date ){
                RightSearch.push(e);
             }}}
             else if(category.value && where.value) {
                if(category.value == e.category) {
                    if (e.where == where.value )
                 {
                     RightSearch.push(e);
             }}}
             else if(FromDate.value && ToDate.value) {
                if( (ToDate.value >= e.date) && (FromDate.value <= e.date)){
                RightSearch.push(e);
             }}
             else if(FromDate.value && where.value) {
                if( (FromDate.value <= e.date) && (e.where == where.value )){
                RightSearch.push(e);
             }}
             else if ( ToDate.value && where.value ) {
                if( (ToDate.value >= e.date) && (e.where == where.value )){
                RightSearch.push(e);
             }}
              else if (category.value) {
                if((e.category == category.value)){
                     RightSearch.push(e);
              }}
              else if(FromDate.value ){
                if( (FromDate.value <= e.date)){
                RightSearch.push(e);
              }}
              else if(ToDate.value) {
                if( (ToDate.value >= e.date)){
                RightSearch.push(e);
              }}
              else if (where.value) {
                if( (e.where == where.value)){
                RightSearch.push(e);
              }}
        });
        localStorage.setItem('FilteredEvents', JSON.stringify(RightSearch));
        this.state.searchedevents = [];
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
    rowClick(id) {
        console.log(id);
        this.props.history.push("/event/" + id);
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
                    <Container>
                        <h1 style={{ color: "red" }} className="font-weight-bold ">Search Event</h1>

                        <InputGroup className="mb-10" style={{ width: "50%" }}>
                            <>
                                <Button variant="primary" onClick={this.handleShow} >Filter</Button>




                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header >
                                    </Modal.Header>
                                    <Modal.Body>

                                        <Modal.Header closeButton>
                                            <Modal.Title>Events Filter </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body> <Form style={{ height: "540px", width: "400px" }} >

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
                                            <center>
                                                <Container>
                                                    <Row>
                                                        <Col sm={2}></Col>
                                                        <Col> <Button variant="primary" type="submit" onClick={this.Filtering} >
                                                            Filter
                                            </Button>
                                                        </Col>
                                                        <Col sm={1}></Col>
                                                        <Col>  <Button variant="primary" onClick={this.handleClose}>
                                                            Close
                                          </Button></Col>
                                                        <Col sm={2}></Col>
                                                    </Row>

                                                </Container>
                                            </center>
                                        </Form>
                                        </Modal.Body>


                                    </Modal.Body>

                                </Modal>

                            </>
                            <FormControl
                                id= "Byid"
                                aria-describedby="basic-addon1"
                                placeholder="Search Event By ID"
                                name="inputId"
                                ref='Byid'
                                
                                onBlur={this.onIdChange}
                            />

                            <Button style={{ height: "38px" }}>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </Button>
                        </InputGroup>
                    </Container>

                </center>

                {
                    (this.state.filtered && !this.state.inputId.value && this.state.searchedevents.length) ? <>
                        <div className="col-md">
                            <center>
                                <div>
                                    <Table style={{ textAlign: "center", marginTop: "30px" }} className="table tablebackground tableStyle" id="result">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">category</th>
                                                <th scope="col">Event Title</th>
                                                <th scope="col">When</th>
                                                <th scope="col">Where</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.searchedevents.map(({ ID, title, category, date, where }, i) =>
                                                    <SearchedEventComponent key={i} ID={ID} title={title} category={category} date={date} where={where} click={this.rowClick} buttonClickFunc={this.buttonClick} />
                                                )}

                                        </tbody>
                                    </Table>
                                </div>
                            </center>
                        </div>

                    </> : ''
                }



                {
                    ((this.state.inputId.value && !this.state.filtered) && this.getEvent(this.state.inputId.value)) ? <>
                        <div className="col-md">
                            <center>
                                <div>
                                    <Table style={{ textAlign: "center", marginTop: "30px" }} className="table tablebackground tableStyle" id="result">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">category</th>
                                                <th scope="col">Event Title</th>
                                                <th scope="col">When</th>
                                                <th scope="col">Where</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                <SearchedEventComponent ID={this.getEvent(this.state.inputId.value).ID} title={this.getEvent(this.state.inputId.value).title} category={this.getEvent(this.state.inputId.value).category} date={this.getEvent(this.state.inputId.value).date} click={this.rowClick} where={this.getEvent(this.state.inputId.value).where} />
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