import React from 'react';

import './general.css';
import * as api from "./api";
import CardComponent from './CardComponent';
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
      {this.state.wishes.map(({ eventID, from, wishContent, imageURL }, i) => { return <CardComponent key={i} eventID={eventID} from={from} wishContent={wishContent} imageURL={imageURL} /> })}
      </Row>;
  }
}
