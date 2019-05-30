import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import EventDetailsComponent from './EventDetailsComponent';
import CardComponent from './CardComponent';
import { NavLink } from 'react-router-dom';
import * as api from './api';


export default class WishesComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      wishes: []
    }
  }
  componentDidMount() {
    api.getEvents()
      .then(events => this.setState({ events }));
    api.getWishes()
      .then(wishes => this.setState({ wishes }));
  }

  render() {
    return <>
      <Container>
        <Row>
          <Col xs="5">
          {this.state.events.map(({ ID, title, catagory, date, where }, i) => { return (this.props.match.params.eventID == ID) ? <EventDetailsComponent key={i} ID={ID} title={title} catagory={catagory} date={date} where={where} /> : '' })}
          </Col>
          <Col >
            <NavLink className="navbarClass" to={"/AddABestWishComponent/" + this.props.match.params.eventID} activeClassName="text-warning">
              <Button style={{ backgroundColor: "red" }} className="btn btn-primary">Add a Best Wish</Button>
            </NavLink>
          </Col>
        </Row>
        <Row>
          {this.state.wishes.map(({ ID, eventID, from, wishContent, imageURL }, i) => { return (this.props.match.params.eventID == eventID) ? <CardComponent key={i} ID={ID} eventID={eventID} from={from} wishContent={wishContent} imageURL={imageURL} /> : '' })}
        </Row>
      </Container>
    </>;
  }

}


