import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './general.css';
export default class MyEventsComponent extends React.Component {
    render() {
        return (
            <>
          
                <tr onClick={this.props.func}>
                    <td>{this.props.ID}</td>
                    <td>{this.props.catagory}</td>
                    <td>{this.props.title}</td>
                    <td>{this.props.date}</td>
                    <td>{this.props.where}</td>  
                </tr>
                <tr style={{textAlign:"center"}}>
                <td>
                    <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid white"}} onClick={this.props.buttonClickFunc}>Update</Button>
                    </td>
                    <td>
                    <Button className="font-weight-bold" variant="primary" style={{ border: "2px solid red" }}>Delete</Button>
                    </td>
                </tr>
               
            </>
        );
    }
}
