import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WishContext from './WishContext';

import NavBarComponent from './NavBarComponent';
import HomeComponent from './HomeComponent';
import JoinComponent from './JoinComponent';
import AboutComponent from './AboutComponent';
import AddABestWishComponent from './AddABestWishComponent';
import WishesComponent from './WishesComponent';
import EventsComponent from './EventsComponent';
import CreateNewEvent from './CreateNewEventComponent';
import LoginComponent from './LoginComponent';
import MyEventsComponent from './MyEventsComponent';
import SearchedEventComponent from './SearchedEventComponent';
import MyWishes from './MyWishes';

export default class App extends React.Component {
    constructor() {
        super();
        this.login=this.login.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            name: 'Ahalan',
            login: this.login,
            logout: this.logout
        };

        if (!localStorage.users) {
            localStorage.users = JSON.stringify([
                {
                    "name": "ameer",
                    "userName": "ameer.outlook.com",
                    "password": 12345
                },
                {
                    "name": "saeed",
                    "userName": "saeednamih@gmail.com",
                    "password": 5678
                },
                {
                    "name": "sally",
                    "userName": "sallydabbah@gmail.com",
                    "password": 9101112
                },
                {
                    "name": "ameer",
                    "userName": "ameer_z_90@hotmail.com",
                    "password": 131415
                }
            ]);
        }
        if (!localStorage.userWishes) {
            localStorage.userWishes = JSON.stringify([
                {
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
                }]);
        }
    }

    login(email, password){
        this.setState({name:email});
    }

    logout(){
        this.setState({name:''});
    }

    render() {
        return (
            <>
                <WishContext.Provider value={this.state}>
                    <BrowserRouter>
                        <div>
                            <NavBarComponent />
                            <Switch>
                                <Route path="/" component={HomeComponent} exact />
                                <Route path="/events" component={EventsComponent} />
                                <Route path="/wishes" component={MyWishes} />
                                <Route path="/about" component={AboutComponent} />
                                <Route path="/join" component={JoinComponent} />
                                <Route path="/login" component={LoginComponent} />

                            </Switch>
                        </div>
                    </BrowserRouter>
                </WishContext.Provider>
            </>);

    }
}
ReactDOM.render(<App />, document.querySelector('#container'));
