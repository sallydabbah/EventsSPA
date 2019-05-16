import React from 'react';
import { Button } from "react-bootstrap";

import './general.css';
export default class MyEventsComponent extends React.Component {
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.ID}</td>
                    <td>{this.props.catagory}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.where}</td>
                    <td><Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white" }}>Update</Button></td>
                    <td><Button className="font-weight-bold" variant="primary" style={{ border: "2px solid red" }}>Delete</Button></td>
                </tr>
            </>
        );
    }
}
