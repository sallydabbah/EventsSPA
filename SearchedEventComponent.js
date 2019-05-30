import React from 'react'



export default class SearchedEventComponent extends React.Component {
    render() {
        return <>
            <tr onClick={() => this.props.click(this.props.ID)}  >
                <td>{this.props.ID}</td>
                <td>{this.props.category}</td>
                <td>{this.props.title}</td>
                <td>{this.props.date}</td>
                <td>{this.props.where}</td>
            </tr>
        </>;
    }
}