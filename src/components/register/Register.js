import React from "react";
import { Form } from "react-bootstrap";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Alert } from "reactstrap";
import { registerUser } from "../../actions/userActions";

function validate(email, password) {
  
  const errors = [];

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  // if (password.length < 6) {
  //   errors.push("Password should be at least 6 characters long");
  // }

  return errors;
}

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = ReactDOM.findDOMNode(this._emailInput).value;
    const password = ReactDOM.findDOMNode(this._passwordInput).value;

    const errors = validate(email, password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    e.preventDefault();
    const newData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newData);
  }

  onSubmit = e => {
    e.preventDefault();
    const newData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(newData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const Def = props => (
      <div>{this.props.success ? <Redirect to="/" /> : null}</div>
    );

    const Spinner = props => (
      <div>
        {this.props.isLoading ? (
          <Spinner size="lg" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : null}
      </div>
    );
    const { errors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Def />
        <Spinner />
        {errors.map(error => (
          <Alert key={error} color="primary">
            {error}
          </Alert>
        ))}
        <h1>Register Here</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            autoComplete="false"
            autoCorrect="false"
            type="text"
            ref={emailInput => (this._emailInput = emailInput)}
            placeholder="Enter Email"
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            ref={passwordInput => (this._passwordInput = passwordInput)}
            placeholder="Password"
            onChange={this.onChange}
          />
        </Form.Group>

        <button type="input" className="btn btn-primary">
          Submit
        </button>
      </Form>
    );
  }
}
function mapStateToProps(state) {
  return {
    register: state.regis.data,
    success: state.regis.isSuccess,
    error: state.regis.error,
    isLoading: state.regis.isLoading
  };
}

export default connect(mapStateToProps, { registerUser })(Register);
