import React from 'react';

import EventDetailsComponent from './EventDetailsComponent';
import CardComponent from './CardComponent';
import {NavLink} from 'react-router-dom';
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
      <div className="container-fluid">
        <div className="row"><br /></div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col">
            <div className="col-md">
              <NavLink className="navbarClass" to={"/AddABestWishComponent/" + this.props.match.params.eventID} activeClassName="text-warning">
                <button style={{ backgroundColor: "red" }} className="btn btn-primary">Add a Best Wish</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            {this.state.events.map(({ ID, title, catagory, date, where }, i) => { return (this.props.match.params.eventID == ID) ? <EventDetailsComponent key={i} ID={ID} title={title} catagory={catagory} date={date} where={where} /> : '' })}
          </div>
        </div>
        <div className="row">
          {this.state.wishes.map(({ ID,eventID, from, wishContent, imageURL }, i) => { return (this.props.match.params.eventID == eventID) ? <CardComponent key={i} ID={ID} eventID={eventID} from={from} wishContent={wishContent} imageURL={imageURL} /> : '' })}
        </div>
      </div>
    </>;
  }

}


