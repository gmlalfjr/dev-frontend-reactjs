import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getOne, updateData } from "../actions/Employee";


class DetailEmployee extends Component {
  state = {
    fullName: "",
    gender: "",
    address: "",
    idCard: "",
    age: ""
    
  };

  componentDidMount() {
    this.props.getOne(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { get } = this.props;
    if (get && prevProps.get !== get) {
      this.setState({
        id: get.id,
        fullName: get.fullName,
        gender: get.gender,
        address: get.address,
        idCard: get.idCard,
        age: get.age
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const Employee = {
      fullName: this.state.fullName,
      gender: this.state.gender,
      address: this.state.address,
      idCard: this.state.idCard,
      dateOfBirth: this.state.dateOfBirth
    };

    this.props.updateData(this.props.match.params.id, Employee);
  };

  render() {
    const Updated = props => (
      <div>{this.props.isUpdated ? <Redirect to="/home" /> : null}</div>
    );

    return (
      <div>
        <Updated />
        <Form onSubmit={this.onSubmit.bind(this)}>
          <h2>Edit Employee</h2>
          <FormGroup>
            <Label for="exampleEmail">Fist Name</Label>
            <Input
              onChange={this.onChange}
              value={this.state.fullName}
              type="text"
              name="fullName"
              id="exampleEmail"
              placeholder="with a First Name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Gender</Label>
            <Input
              onChange={this.onChange}
              type="select"
              value={this.state.gender}
              name="gender"
              id="exampleSelect"
            >
              <option disabled="true" selected>{this.state.gender}</option>
              <option>Pria</option>
              <option>Wanita</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Id Card</Label>
            <Input
              onChange={this.onChange}
              type="number"
              value={this.state.idCard}
              name="idCard"
              id="exampleNumber"
              placeholder="Id Card "
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">Date of Birth</Label>
            <Input
              onChange={this.onChange}
              type="number"
              value={this.state.age}
              name="age"
              id="exampleDate"
              placeholder="Age "
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Address</Label>
            <Input
              onChange={this.onChange}
              type="textarea"
              value={this.state.address}
              name="address"
              id="exampleText"
            />
          </FormGroup>

          <Button color="info" size="lg">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    get: state.getOne.data,
    isUpdated: state.getOne.isUpdated
  };
}
export default connect(mapStateToProps, { getOne, updateData })(DetailEmployee);
