import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Button from "@material-ui/core/Button";

import { Auth, firestore } from "../../db/config";

class AdminLogin extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
  };
  handleChange = (attr, evt) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };
  handleClick = () => {
    if (this.state.email === "" || this.state.password === "") {
      alert("please fill all empty fields");
    } else {
      this.setState({
        loading: true,
      });
      Auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
          firestore
            .collection("admin")
            .doc(`${data.user.uid}`)
            .get()
            .then((details) => {
              this.setState({
                loading: false,
                email: "",
                password: "",
              });

              alert("working");
            })
            .catch((error) => {
              alert(error.message);
              this.setState({
                loading: false,
                email: "",
                password: "",
              });
            });
        })
        .catch((error) => {
          alert(error.message);
          this.setState({
            loading: false,
            email: "",
            password: "",
          });
        });
    }
  };
  render() {
    return (
      <div style={{ background: "navy", height: "100vh" }}>
        <div className="container col-lg-4" style={{ paddingTop: "150px" }}>
          <div className="card">
            <div className="card-body">
              <h4
                className="col-lg-12"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#0d47a1",
                }}
              >
                Sign in
              </h4>

              <div>
                {" "}
                <MDBInput
                  type="email"
                  label="Your Email"
                  onChange={(evt) => this.handleChange("email", evt)}
                  value={this.state.email}
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  type="password"
                  label="Your Password"
                  onChange={(evt) => this.handleChange("password", evt)}
                  value={this.state.password}
                />
              </div>

              <div className="col-lg-12" style={{ textAlign: "center" }}>
                {this.state.loading ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                  >
                    Login
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
