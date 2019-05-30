import React from 'react';

import './general.css';
import * as api from "./api";
import CardUserWishesComponent from './CardUserWishesComponent';
import { Row } from 'react-bootstrap';

export default class MyWishes extends React.Component {
  constructor() {
    super();
    this.state = {
      wishes: []
    }
  }
  componentDidMount() {
    api.getUserWishesByUserID(this.props.match.params.userID)
      .then(wishes => this.setState({ wishes }));
  }
  render() {
    return <Row>
      {this.state.wishes.map(({ID, eventID, from, wishContent, imageURL }, i) => { return <CardUserWishesComponent key={i} id={ID} eventID={eventID} from={from} wishContent={wishContent} imageURL={imageURL} /> })}
      </Row>;
  }
}
