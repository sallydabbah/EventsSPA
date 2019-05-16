import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
export default class App extends React.Component {
    constructor() {
        super();
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
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <div>
                        <NavBarComponent />
                        <Switch>
                            <Route path="/" component={HomeComponent} exact />
                            <Route path="/events" component={EventsComponent} />
                            <Route path="/wishes" component={WishesComponent} />
                        </Switch>
                    </div>
                </BrowserRouter> </>);
    }
}
ReactDOM.render(<App />, document.querySelector('#container'));
