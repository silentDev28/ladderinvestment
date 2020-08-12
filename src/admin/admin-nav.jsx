import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import LockIcon from "@material-ui/icons/Lock";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Auth } from "../db/config";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        className="fixed-top"
        color="primary-color-dark"
        dark
        expand="md"
        style={{ paddingTop: "6px", paddingBottom: "6px" }}
      >
        <MDBNavbarBrand>
          <Link to="/userdashboard/user">
            {" "}
            <strong className="white-text">Admin Dashboard</strong>
          </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          (
          <MDBNavbarNav right>
            <MDBNavItem>
              <Link to="/admin/">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <HomeIcon />
                  Home
                </Button>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link to="/admin/users">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <AccountBalanceIcon />
                  Users
                </Button>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link to="/admin/pledges">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <CheckCircleOutlineIcon />
                  Pledges
                </Button>
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <Link to="/userdashboard/user/referrals">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <AccountTreeIcon />
                  Referrals
                </Button>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/userdashboard/user/changepassword">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <LockIcon />
                  Change Password
                </Button>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/admin/merge-users">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "5px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                >
                  <LockIcon />
                  Merge Users
                </Button>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => Auth.signOut()}
                style={{ marginTop: "5px" }}
              >
                <ExitToAppIcon />
                Logout
              </Button>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
