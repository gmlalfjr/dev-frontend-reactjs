import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { deleteEmployee } from "../../actions/Employee";
class DeleteModal extends Component {
  state = {
    modal: false,
    id: this.props.id
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    
    // const Delets = () => (
    //   <React.Fragment>
    //     {this.props.isDeleted ? (
    //       <Spinner style={{ width: "3rem", height: "3rem" }} />
    //     ) : null}
    //   </React.Fragment>
    // );
    return (
      <React.Fragment>
        {/* <Delets /> */}
        <Button color="danger" onClick={this.toggle}>
          Delete
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete Data</ModalHeader>
          <ModalBody>
            <Button
              block
              onClick={() =>
                this.toggle() || this.props.deleteEmployee(this.state.id)
              }
            >
              Delete Employee
            </Button>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.employee.data,
    error: state.employee.error,
    isDeleted: state.getOne.isDeleted,
    isLoading: state.getOne.isLoading
  };
}

export default connect(mapStateToProps, { deleteEmployee })(DeleteModal);
