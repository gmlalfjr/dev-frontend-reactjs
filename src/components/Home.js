import React, { Component } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deleteEmployee, getEmployeeData } from "../actions/Employee";
import DeleteModal from "../components/deletemodal/DeleteEmployee";

class Home extends Component {
  componentDidMount() {
    this.props.getEmployeeData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isDeleted } = this.props;
    if (isDeleted && prevProps.isDeleted !== isDeleted) {
      this.props.getEmployeeData();
    }
  }

  render() {
    const Def = props => (
      <React.Fragment>
        {this.props.error ? <Redirect to="/" /> : null}
      </React.Fragment>
    );

    const Defs = props => (
      <React.Fragment>
        {this.props.isLoadingGetAll ? (
          <div style={{ textAlign: "center" }}>
            <Spinner size="lg" animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <React.Fragment>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>

                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.length
                  ? this.props.data.map(data => (
                      <tr key={data._id}>
                        <td>No</td>
                        <td>{data.fullName}</td>

                        <td>
                          <Link to={`/detail/${data._id}`}>
                            <Button variant={"outline-dark"}>Detail</Button>
                          </Link>
                          <DeleteModal id={data._id} buttonLabel={"Delete"} />
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
            <Link to="/addEmployee">
              <Button size="lg" variant="outline-secondary">
                Add Employee
              </Button>
            </Link>
          </React.Fragment>
        )}
      </React.Fragment>
    );

    return (
      <div>
        <Def />
        <Defs />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.employee.data,
    //loading: state.user.isLoading,
    error: state.employee.error,
    isLoadingGetAll: state.employee.isLoading,

    isDeleted: state.getOne.isDeleted,
    isLoading: state.getOne.isLoading
  };
}

export default connect(mapStateToProps, { getEmployeeData, deleteEmployee })(
  Home
);
