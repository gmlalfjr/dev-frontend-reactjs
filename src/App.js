import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loadUser } from "./actions/userActions";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import DetailEmployee from "./components/DetailEmployee";
import Home from "./components/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Regiser from "./components/register/Register";
import store from "./utils/store";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            null
          )
        }
      />
    );
    return (
      <div className="container">
        <Router>
          <Navbar />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/addEmployee" component={AddEmployee} />
          <PrivateRoute exact path="/detail/:id" component={DetailEmployee} />

          <Route exact path="/" component={Login} />

          <Route path="/regis" component={Regiser} />
          {/* <PrivateRoute path="/home" component={Home} /> */}
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

export default connect(mapStateToProps, null)(App);
