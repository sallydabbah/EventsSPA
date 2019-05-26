import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faImage, faList } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

import * as api from './api';
import WishContext from './WishContext';
import validator, { field } from './validator';

export default class AddABestWishComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            from: field({ value: '', name: 'from', minLength: 2 }),
            Wishing: field({ value: '', name: 'Wishing', minLength: 2 }),
            imageURL: field({ value: '', name: 'imageURL', minLength: 10 }),
            wishes: []
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        api.getWishes()
            .then(wishes => this.setState({ wishes }));
    }
    onInputChange({ target: { name, value } }) {
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                ...validator(value, name, this.state[name].validations)
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const wish = Object.assign({}, this.state);
        for (let key in wish) {
            if (key != "wishes") {
                const { value, validations } = wish[key];
                const { valid, errors } = validator(value, key, validations);
                if (!valid) {
                    wish[key].valid = valid;
                    wish[key].errors = errors;
                }
            }
        }
        this.setState({ ...wish });

        if (this.state.from.errors.length == 0 && this.state.Wishing.errors.length == 0 && this.state.imageURL.errors.length == 0) {
            const mywish = {
                userID: this.context.userID,
                ID: parseInt(this.state.wishes[this.state.wishes.length - 1].ID) + 1,
                from: this.state.from.value,
                wishContent: this.state.Wishing.value,
                imageURL: this.state.imageURL.value,
                eventID: this.props.match.params.eventID
            };
            alert("added successfully");
            this.setState(prevState => ({ wishes: [...prevState.wishes, mywish] }), function () {
                this.state.wishes.map((item) => {
                    console.log(item.from);
                });
            });
            this.props.history.push("/event/" + this.props.match.params.eventID);
        }
    }

    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                        <Form style={{ height: 250, margin: "80px 300px  0px 300px" }} onSubmit={this.onSubmit} >
                            <h1 style={{ color: "red" }} className="font-weight-bold">Add a Best Wish</h1>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="font-weight-bold">From</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                name="from"
                                                placeholder="Enter your name"
                                                aria-label="from"
                                                id="fromInput"
                                                defaultValue={!this.context.name ? this.state.from.value : this.context.name}
                                                onBlur={this.onInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {this.state.from.errors.map((err, i) => (
                                        <Form.Text key={i} className="text-danger">
                                            {err}
                                        </Form.Text>
                                    ))}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="font-weight-bold">Wishing you</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faList} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                as="textarea"
                                                name="Wishing"
                                                aria-label="Wishing"
                                                placeholder="Enter your wish"
                                                rows="5"
                                                id="wishInput"
                                                defaultValue={this.state.Wishing.value}
                                                onBlur={this.onInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {this.state.Wishing.errors.map((err, i) => (
                                        <Form.Text key={i} className="text-danger">
                                            {err}
                                        </Form.Text>
                                    ))}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label className="font-weight-bold">imageURL</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <FontAwesomeIcon icon={faImage} />
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                name="imageURL"
                                                placeholder="Enter your imageURL"
                                                aria-label="imageURL"
                                                id="idSrcImg"
                                                defaultValue={this.state.imageURL.value}
                                                onBlur={this.onInputChange}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    {this.state.imageURL.errors.map((err, i) => (
                                        <Form.Text key={i} className="text-danger">
                                            {err}
                                        </Form.Text>
                                    ))}
                                </Col>

                            </Row>
                            <Button style={{ border: "2px solid white" }} className="font-weight-bold" variant="primary" type="submit">
                                Add a Best Wish
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>;
    }
}
AddABestWishComponent.contextType = WishContext;