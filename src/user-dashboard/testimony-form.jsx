import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import { Button } from "@material-ui/core";
import { firestore } from "../db/config";
import { connect } from "react-redux";

class TestimoneyForm extends Component {
  state = {
    testimoney: "",
    loading: false,
  };
  handletestimonies = (evt) => {
    this.setState({
      testimoney: evt.target.value,
    });
  };
  handleAdd = () => {
    if (this.state.testimoney === "") {
      alert("Please enter a valid details");
    } else {
      this.setState({
        loading: true,
      });

      firestore
        .collection("testimonies")
        .add({
          testimonies: this.state.testimoney,
          name: this.props.user_details.fullName,
          createdAt: new Date().toISOString(),
        })
        .then(() => {
          this.setState({
            loading: false,
          });
          alert("Testimony successful!!!");
          window.location.href = "/userdashboard/user";
        })
        .catch((error) => {
          this.setState({
            loading: false,
          });
          alert(error);
        });
    }
  };
  render() {
    return (
      <div>
        <MDBInput
          label="Add testimonies"
          onChange={(evt) => this.handletestimonies(evt)}
        />
        <div style={{ width: "100%", textAlign: "center" }}>
          {this.state.loading ? (
            <Button variant="contained" color="primary">
              Please wait...
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAdd}
            >
              Add
            </Button>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ userDetails: { user_details } }) => {
  return {
    user_details,
  };
};
export default connect(mapStateToProps)(TestimoneyForm);
