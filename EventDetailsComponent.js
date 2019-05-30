import React from 'react';
import {Table} from 'react-bootstrap';


export default class EventDetailsComponent extends React.Component {
    render() {
        return <>
            <Table className="table tablebackground tableStyle" id="info">
                <thead>
                    <tr>
                        <th scope="col" colSpan="2">Event Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>title</td>
                        <td>{this.props.title}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>When</td>
                        <td>{this.props.date}</td>
                    </tr>
                    <tr>
                        <td>Where</td>
                        <td>{this.props.where}</td>
                    </tr>
                </tbody>
            </Table>
        </>;
    }
}
