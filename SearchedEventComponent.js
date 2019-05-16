import React from 'react'



export default class SearchedEventComponent extends React.Component {
    render() {
        return <>
            <tr onClick={this.props.func}>
                <td>{this.props.ID}</td>
                <td>{this.props.catagory}</td>
                <td>{this.props.title}</td>
                <td>{this.props.date}</td>
                <td>{this.props.where}</td>
            </tr>
        </>;
    }
}