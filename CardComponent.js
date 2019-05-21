import React from 'react';

export default class CardComponent extends React.Component {
    render() {
        return <>
            <div className="col-md-3">
                <div className="card bg-light mb-3" style={{ max_width: "20rem" }}>
                    <div className="card-header"><label>{this.props.from}</label></div>
                    <div className="card-body">
                        <div id="cardBody">
                            <div><img style={{ float: "right" }} width="150px" height="150px" src={this.props.imageURL}></img></div>
                            <div> <p>{this.props.wishContent}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}