import React from 'react';
import { Table} from "react-bootstrap";
import MyEventsComponent from './MyEventsComponent';
import * as api from './api';

export default class ShowUserEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            userEvents: []
        }
        this.rowClick=this.rowClick.bind(this);
        this.buttonClick=this.buttonClick.bind(this);
    }
    
    buttonClick() {
        this.props.history.push("/wishes/1");
    }
    rowClick(idOfEvent) {
        this.props.history.push("/wishes/"+idOfEvent);
    }
    componentDidMount() {
        const { match } = this.props;
        console.log(match);
        api.getUserEventsByUserID(this.props.match.params.userID)
            .then(userEvents => this.setState({ userEvents }));
    }
    render() {
        return <>
            <center>
                <div className="container" >
                    <div className="row">
                        <div className="col"><h1 style={{ color: "white", textAlign: "center", marginTop: "20px" }} className="font-weight-bold">My Events</h1></div>
                        <Table style={{ textAlign: "center", marginTop: "30px" }} className="table tablebackground tableStyle" id="result">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Catagory</th>
                                    <th scope="col">Event Title</th>
                                    <th scope="col">When</th>
                                    <th scope="col">Where</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.userEvents.map(({ ID, title, catagory, date, where }, i) =>
                                <MyEventsComponent key={i} ID={ID} title={title} catagory={catagory} date={date} where={where} func={this.rowClick} buttonClickFunc={this.buttonClick}/>
                                )}
                               
                            </tbody>
                        </Table>
                    </div>
                </div>
            </center>
        </>;
    }
}