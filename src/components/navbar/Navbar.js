import React, { Component } from "react";
import { Button as Buts, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Logout from "../Logout";


class Navbars extends Component {
  render() {
    const { isAuthenticated, isLogout } = this.props.login;

    const Redir = () => <div>{isLogout ? <Redirect to="/" /> : null}</div>;
    return (
      <div>
        <Navbar>
          <Redir />
          <Navbar.Brand href="#home">Employee Data App</Navbar.Brand>
          <Navbar.Toggle />
          {isAuthenticated ? (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to="/home">Home</Link>
              </Navbar.Text>
              <Logout />
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Link to="/"><Buts variant="outline-secondary">Login</Buts></Link>
              </Navbar.Text>
              <Navbar.Text>
              <Link to="/regis"><Buts variant="outline-danger">Sing Up</Buts></Link>
              </Navbar.Text>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.user
  };
}

export default connect(mapStateToProps, null)(Navbars);
