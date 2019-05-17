import React from 'react';

import './general.css';
import * as api from "./api";
import CardComponent from './CardComponent';

export default class LoginComponent extends React.Component {
          constructor(){
              super();  
              this.state={
                  wishes:[]
              }
          }
          componentDidMount() {
            setTimeout(() => {
              /*api.getUsers().then(({ data }) => {
                  this.setState({ users: data });
              });*/
              const userId=1; // we should use it in our request , currently its not working , the api selects only static data from App.js 
              const data = api.getWishes(userId);
              this.setState({ wishes: data }, () => console.log(this.state));
            }, 1000);
          }
      render(){
       return <div className="row">
            {this.state.wishes.map(({ eventID, from, wishContent, imageURL }, i) => { return <CardComponent key={i} eventID={eventID} from={from} wishContent={wishContent} imageURL={imageURL} /> })}
          </div>;
      }    
}