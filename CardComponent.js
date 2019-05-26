import React from 'react';

export default class CardComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            content: '',
            seeflag: true
        };
        this.seeMore = this.seeMore.bind(this);
        this.seeLess = this.seeLess.bind(this);
        this.handelText = this.handelText.bind(this);
    }
    componentDidMount() {
        this.setState({ content: `${this.props.wishContent.substring(0, 70)}...` });
    }

    seeMore() {
        this.setState({ content: this.props.wishContent, seeflag: false });
    }
    seeLess() {
        this.setState({ content: `${this.props.wishContent.substring(0, 70)}...`, seeflag: true });
    }
    handelText() {
        var btnText = document.getElementById(this.props.ID);
        if (this.state.seeflag) {
            btnText.innerHTML = "see less";
            this.seeMore();
        }
        else {
            btnText.innerHTML = "see more";
            this.seeLess();
        }
    }
    render() {
        return <>
            <div className="col-md-3">
                <div className="card bg-light mb-3" style={{ max_width: "20rem" }}>
                    <div className="card-header"><label>{this.props.from}</label></div>
                    <div className="card-body">
                        <div id="cardBody">
                            <div><img style={{ float: "right" }} width="150px" height="150px" src={this.props.imageURL}></img>
                            </div>
                            <div>
                                <p>
                                    {this.state.content}
                                </p>
                                <button onClick={this.handelText} id={this.props.ID}>
                                    see more
                               </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}