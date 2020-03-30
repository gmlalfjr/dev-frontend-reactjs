import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../actions/userActions";


class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(newData);
  };

  render() {
    
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <div>
          <Form onSubmit={this.onSubmit}>
            <h1>Login Here</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="Enter Username"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.onChange}
              />
            </Form.Group>

            <button type="input" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.user.data,
    isAuthenticated: state.user.isAuthenticated
  };
}

export default connect(mapStateToProps, { loginUser })(Login);
