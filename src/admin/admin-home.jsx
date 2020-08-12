import React, { Component } from "react";
import { firestore, Auth } from "../db/config";
import AdminRegForm from "./auth/admin-register";
import { connect } from "react-redux";
import AdminNavebar from "./admin-nav";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import AdminUsers from "./admin-users";
import AdminPledges from "./admin-pledge";
import MergeUsers from "./merge-users";

class AdminHome extends Component {
  state = {};
  componentDidMount() {
    Auth.onAuthStateChanged((user) => {
      console.log();
    });
  }
  render() {
    return (
      <div>
        {this.props.user ? (
          <div style={{ background: "navy", height: "100vh" }}>
            {" "}
            <AdminNavebar />
            <Switch>
              <Route exact path="/admin" component={Home}></Route>
              <Route path="/admin/users" component={AdminUsers}></Route>
              <Route path="/admin/pledges" component={AdminPledges}></Route>
              <Route path="/admin/merge-users" component={MergeUsers}></Route>
            </Switch>
          </div>
        ) : (
          <AdminRegForm />
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ userAuth: { user } }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(AdminHome);
