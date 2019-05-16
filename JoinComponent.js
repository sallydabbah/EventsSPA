import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import './general.css';
import NavBarComponent from './NavBarComponent';
import validator, { field, checkUniqueUserName } from './validator';
import * as api from "./api";
export default class JoinComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: field({ value: '', name: 'displayName', minLength: 2 }),
            Useremail: field({ value: '', name: 'Useremail', pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/ }),
            UserPassword: field({ value: '', name: 'UserPassword', minLength: 2 }),
            Users: []
        };
        this.addUser = this.addUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            /*api.getUsers().then(({ data }) => {
                this.setState({ users: data });
            });*/
            const data = api.getUsers();
            this.setState({ Users: data }, () => console.log(this.state));
        }, 1000);
    }
    addUser() {
        if (localStorage.users) {
            var oldUsers = JSON.parse(localStorage.getItem('users'));
            const neWuser = {
                name: this.state.displayName.value,
                password: this.state.UserPassword.value,
                userName: this.state.Useremail.value
            };
            oldUsers.push(neWuser);
            localStorage.setItem('users', JSON.stringify(oldUsers));
        }
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
        const user = Object.assign({}, this.state);
        const { userNameExists, UniqueUserNameError } = checkUniqueUserName(this.state.Users, this.state.Useremail.value);
        for (let key in user) {
            if (key != "Users") {
                const { value, validations } = user[key];
                const { valid, errors } = validator(value, key, validations);
                if (!valid) {
                    user[key].valid = valid;
                    user[key].errors = errors;
                }
                if (userNameExists && key == "Useremail") {
                    user[key].errors = [...errors, ...UniqueUserNameError];
                }
            }
        }
        this.setState({ ...user });
        //Send data to somewhere 
        //...
        if (this.state.displayName.errors.length == 0 && this.state.Useremail.errors.length == 0 && this.state.UserPassword.errors.length == 0) {
            alert(`User ${this.state.displayName.value} was addes successfully`);
            this.addUser();
        }
    }
    render() {
        return <>
            <NavBarComponent />
            <div className="login-box" style={{ height: "620px", width: "500px", marginTop: "80px" }}>
                <h1>Join Here</h1>
                <Image src="images/avatar.png" roundedCircle className="avatar" />
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label style={{ color: "white" }}>Display Name</Form.Label>
                        <Form.Control name="displayName" type="name" placeholder="Enter your name" onBlur={this.onInputChange} />
                        {this.state.displayName.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ color: "white" }}>Username (Email)</Form.Label>
                        <Form.Control name="Useremail" onBlur={this.onInputChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                        {this.state.Useremail.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{ color: "white" }}>Password</Form.Label>
                        <Form.Control name="UserPassword" onBlur={this.onInputChange} type="password" placeholder="Password" className="form_password" />
                        {this.state.UserPassword.errors.map((err, i) => (
                            <Form.Text key={i} className="text-danger">
                                {err}
                            </Form.Text>
                        ))}
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{
                        border: 0,
                        outline: 0,
                        height: '40px',
                        width: '440px',
                        background: '#1c8adb',
                        color: '#fff',
                        fontSize: '18px',
                        borderRadius: '20px',
                        border:"2px solid white"
                    }}>
                        Join
                 </Button>
                </Form>
            </div>
        </>;
    }
}
