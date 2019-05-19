import React from 'react';

import './general.css';
import * as api from "./api";
import CardComponent from './CardComponent';

export default class LoginComponent extends React.Component {
          constructor(){
              super();  
              this.state={
                  wishes:[ {
                    "ID": "1",
                    "from": "Ameer",
                    "wishContent": "Happy birthday wish you all the best",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "2",
                    "from": "sally",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                },
                {
                    "ID": "3",
                    "from": "Samah seh",
                    "wishContent": "I wish that your birthday brings a new year as sweet, peppy and fiery as you my dear. Happy birthday.",
                    "imageURL": "https://blog.serenataflowers.com/pollennation/wp-content/uploads/2016/05/original-happy-birthday-messages-FT.gif",
                    "eventID": "1"
                }],
                wishId:''
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
        this.state.wishId=this.props.match.params.wishId;
        console.log('WishID'+this.state.wishId);
        let selectedWish={};
        this.state.wishes.map(wish => {
          if(wish.ID== this.state.wishId){
           selectedWish=wish;
          }//if
    
        });
       return <div className="row">
            { <CardComponent key={selectedWish.wishId} eventID={selectedWish.eventID} from={selectedWish.from} wishContent={selectedWish.wishContent} imageURL={selectedWish.imageURL} /> }
          </div>;
      }    
}