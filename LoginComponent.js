import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import NavBarComponent from './NavBarComponent';
import './general.css';
import * as api from "./api";
import validator, { field, CheckExistsUsernameAndPassword } from './validator';

export default class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: field({ value: '', name: 'email', pattern: /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/ }),
      password: field({ value: '', name: 'password', minLength: 2 }),
      Users: []
    };
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
  onInputChange({ target: { name, value } }) {
    this.setState({
      [name]: {
        ...this.state[name],
        value,
        ...validator(value, name, this.state[name].validations)
      }
    }, () => console.log(this.state));
  }

  onSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const { ValidPassword, ValidUserName, LoginUserNameError, LoginPasswordError } = CheckExistsUsernameAndPassword(this.state.Users, this.state.email.value, this.state.password.value);
    for (let key in user) {
      if (key != "Users") {
        const { value, validations } = user[key];
        const { valid, errors } = validator(value, key, validations);
        if (!valid) {
          user[key].valid = valid;
          user[key].errors = errors;
        }
        if (!ValidPassword && key == "password") {
          user[key].errors = [...errors, ...LoginPasswordError];
        }
        if (!ValidUserName && key == "email") {
          user[key].errors = [...errors, ...LoginUserNameError];
        }
      }
    }
    this.setState({ ...user });
    if (this.state.email.errors.length == 0 && this.state.password.errors.length == 0) {
      alert("Welcome..");
    }
  }
  render() {
    return <>
      <NavBarComponent />
      <div className="login-box" style={{ height: "470px", width: "500px", marginTop: "80px" }}>
        <h1>Login Here</h1>
        <Image src="images/avatar.png" roundedCircle className="avatar" />
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: "white" }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email"
              defaultValue={this.state.email.value}
              onBlur={this.onInputChange}
            />
            {this.state.email.errors.map((err, i) => (
              <Form.Text key={i} className="text-danger">
                {err}
              </Form.Text>
            ))}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"
              defaultValue={this.state.password.value}
              onBlur={this.onInputChange}
            />
            {this.state.password.errors.map((err, i) => (
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
            Login
          </Button>
        </Form>
      </div>
    </>;
  }
}