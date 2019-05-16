import React from 'react';

import NavBarComponent from './NavBarComponent';
import EventDetailsComponent from './EventDetailsComponent';
import CardComponent from './CardComponent';
import AddABestWishComponent from './AddABestWishComponent';

export default class WishesComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      AddNewWishClicked: false
    }
    this.AddNewWishButtonClicked = this.AddNewWishButtonClicked.bind(this);
    this.updateFlagAddNewWishClicked = this.updateFlagAddNewWishClicked.bind(this);
  }
  AddNewWishButtonClicked() {
    if (this.state.addNewWish)
      this.setState({
        AddNewWishClicked: false
      });
    else {
      this.setState({
        AddNewWishClicked: true
      });
    }
    console.log("AddNewWishClicked  " + this.state.AddNewWishClicked);
    this.props.updateWishIsAdded(this.props.wishIsAdded);
  }
  updateFlagAddNewWishClicked(value) {
    this.setState({
      AddNewWishClicked: value
    });
  }
  render() {
    if (!this.state.AddNewWishClicked || this.props.wishIsAdded) {
      return <>
        <NavBarComponent />
        <div className="container-fluid">
          <div className="row"><br /></div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col"> <div className="col-md"><button onClick={this.AddNewWishButtonClicked} style={{ backgroundColor: "red" }} className="btn btn-primary">Add a Best Wish</button></div></div>
          </div>
          <div className="row">
            <div className="col-md-3">
              {this.props.events.map(({ ID, title, catagory, date, where }, i) => { return (this.props.id == ID) ? <EventDetailsComponent key={i} ID={ID} title={title} catagory={catagory} date={date} where={where} /> : '' })}
            </div>
          </div>
          <div className="row">
            {this.props.wishes.map(({ eventID, from, wishContent, imageURL }, i) => { return (this.props.id == eventID) ? <CardComponent key={i} eventID={eventID} from={from} wishContent={wishContent} imageURL={imageURL} /> : '' })}
          </div>
        </div>
      </>;
    }
    else {
      return <>
        <AddABestWishComponent onAddNewWish={this.props.addNewWish} idOfEvent={this.props.id} lastIDofWishes={this.props.lastIDofWish} />
      </>;
    }
  }
}