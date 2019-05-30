import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faImage, faList } from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Form, InputGroup } from "react-bootstrap";

import * as api from './api';
import WishContext from './WishContext';
import validator, { field } from './validator';


export default class UpdateWishComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            from: field({ value: '', name: 'from', minLength: 2 }),
            Wishing: field({ value: '', name: 'Wishing', minLength: 2 }),
            imageURL: field({ value: '', name: 'imageURL', minLength: 10 })
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        api.getWish(this.props.match.params.wishID)
            .then(userWish => localStorage.setItem("userWish", JSON.stringify(userWish)));
        setTimeout(() => {
            const userWish = JSON.parse(localStorage.getItem('userWish'));
            const wish = Object.assign({}, this.state);
            wish.from.value=userWish.from;
            wish.Wishing.value=userWish.wishContent;
            wish.imageURL.value=userWish.imageURL;
            this.setState({...wish},console.log(this.state));
        }, 500);
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
                const { value, validations } = wish[key];
                const { valid, errors } = validator(value, key, validations);
                if (!valid) {
                    wish[key].valid = valid;
                    wish[key].errors = errors;
            }
        }
        this.setState({ ...wish });

        if (this.state.from.errors.length == 0 && this.state.Wishing.errors.length == 0 && this.state.imageURL.errors.length == 0) {
            alert("wish updated successfully");
          //  this.props.history.push("/event/" + this.props.match.params.eventID);
        }
    }

    render() {
        return <>
            <Container>
                <Row>
                    <Col>
                        <Form style={{ height: 250, margin: "80px 300px  0px 300px" }} onSubmit={this.onSubmit} >
                            <h1 style={{ color: "red" }} className="font-weight-bold">Update Wish</h1>
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
                                                defaultValue={this.state.from.value}
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
                                                rows="5"
                                                name="Wishing"
                                                aria-label="Wishing"
                                                placeholder="Enter your wish"
                                                id="wishInput"
                                                onBlur={this.onInputChange}
                                                defaultValue={this.state.Wishing.value}
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
                               Update Wish
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>;
    }
}
UpdateWishComponent.contextType = WishContext;