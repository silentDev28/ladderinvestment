import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import Button from "@material-ui/core/Button";
import { Auth, firestore } from "../../db/config";
import { connect } from "react-redux";

class AdminRegForm extends Component {
  state = {
    password: "",
    rpassword: "",
    email: "",

    loader: false,
  };
  componentDidMount() {}

  handleChange = (attr, evt) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };
  handleSubmit = () => {
    if (
      this.state.password === "" ||
      this.state.rpassword === "" ||
      this.state.email === ""
    ) {
      alert("Please enter all empty fields");
    } else if (this.state.password !== this.state.rpassword) {
      alert("password does not match");
    } else if (this.state.password < 6) {
      alert("Password must be atleast 6 characters");
    } else {
      this.setState({
        loader: true,
      });
      Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
          firestore
            .collection("admin")
            .doc(data.user.uid)
            .get()
            .then((user) => {
              if (user.exists) {
                return "";
              } else {
                firestore
                  .collection("admin")
                  .doc(`${data.user.uid}`)
                  .set({
                    password: this.state.password,
                    email: this.state.email,

                    createdAt: new Date().toISOString(),
                  })
                  .then((data) => {
                    alert("registration successful !!!");
                    this.setState({
                      loader: false,
                      password: "",
                      rpassword: "",
                      email: "",
                    });
                  })
                  .catch((error) => {
                    alert(error);
                    this.setState({
                      loader: false,

                      password: "",
                      rpassword: "",
                      email: "",
                    });
                    return "";
                  });
              }
            });
        })
        .catch((error) => {
          alert(error);
          this.setState({
            loader: false,
          });
          return "";
        });
    }
  };
  render() {
    return (
      <div style={{ background: "navy", height: "100vh" }}>
        <div className="container col-lg-4" style={{ paddingTop: "100px" }}>
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
                Admin Sign up
              </h4>

              <div>
                {" "}
                <MDBInput
                  label="Your Email"
                  onChange={(evt) => this.handleChange("email", evt)}
                  value={this.state.email}
                  type="email"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Your Password"
                  onChange={(evt) => this.handleChange("password", evt)}
                  value={this.state.password}
                  type="password"
                />
              </div>
              <div>
                {" "}
                <MDBInput
                  label="Repeat Password"
                  onChange={(evt) => this.handleChange("rpassword", evt)}
                  value={this.state.rpassword}
                  type="password"
                />
              </div>

              <div className="col-lg-12" style={{ textAlign: "center" }}>
                {this.state.loader ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Please wait...
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Register
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

export default AdminRegForm;
