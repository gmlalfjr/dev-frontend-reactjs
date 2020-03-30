import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addEmployee } from "../actions/Employee";
class AddEmployee extends Component {
  state = {
    fullName: "",
    gender: "",
    address: "",
    idCard: "",
    age: ""
  };

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
      age: this.state.age,
    };

    this.props.addEmployee(Employee);
  };

  
  render() {
    const AddEmployee = () => (
      <React.Fragment>
        {this.props.Sucess ? <Redirect to="/" /> : null}
      </React.Fragment>
    );
    
    return (
      <Form onSubmit={this.onSubmit}>
        <AddEmployee />
        <h2>Add Employee</h2>
        <FormGroup>
          <Label for="exampleEmail">Full Name</Label>
          <Input
            onChange={this.onChange}
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
            name="gender"
            id="exampleSelect"
          >
            <option disabled="true" selected>Select</option>
            <option>Pria</option>
            <option>Wanita</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleNumber">Id Card</Label>
          <Input
            onChange={this.onChange}
            type="number"
            name="idCard"
            id="exampleNumber"
            placeholder="Id Card placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleDate">Age</Label>
          <Input
            onChange={this.onChange}
            type="number"
            name="age"
            id="exampleDate"
            placeholder="date placeholder"
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Address</Label>
          <Input
            onChange={this.onChange}
            type="textarea"
            name="address"
            id="exampleText"
          />
        </FormGroup>

        <Button color="info" size="lg">
          Submit
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    add: state.employeeAdd.data,
    Sucess: state.employeeAdd.addDataSucess
  };
}
export default connect(mapStateToProps, { addEmployee })(AddEmployee);
