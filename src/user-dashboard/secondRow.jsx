import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MoneyIcon from "@material-ui/icons/Money";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";
import moment from "moment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { Button } from "@material-ui/core";
import { firestore } from "../db/config";
import { CodeSharp } from "@material-ui/icons";
import AddTestimonies from "./add-testimonies-form";
class SecondRowCard extends Component {
  state = {
    loading: false,
    dispayRecomitButton: "block",
  };
  handleRecomit = (datas) => {
    const recomitpercentage = (60 / 100) * datas.amountPledge;
    const recomitWithdraw = datas.amountPledge + recomitpercentage;
    this.setState({
      loading: true,
    });
    firestore
      .collection("pledge")
      .doc(`${datas.pledgeId}`)
      .get()
      .then((data) => {
        firestore
          .collection("pledge")
          .doc(`${datas.pledgeId}`)
          .update({
            availability: "waiting to be merge to pay",
            recomit_status: "commited",
          })
          .then((data) => {
            firestore
              .collection("pledge")
              .add({
                amountPledge: datas.amountPledge,
                userId: this.props.userId,
                createdAt: new Date().toISOString(),
                withdraw: recomitWithdraw,
                paid: "Not paid",
                date_to_withdraw: "Not set",
                fullName: this.props.user_details.fullName,
                phoneNumber: this.props.user_details.phoneNumber,
                availability: "available",
                mergeWithdraw: recomitWithdraw,
                mergeAmountPledge: datas.amountPledge,
                pledge_start_date: "Not set",

                recomit_status: "Not yet",
              })
              .then((data) => {
                this.props.sendPledgeData({
                  amountPledge: datas.amountPledge,
                  userId: this.props.userId,
                  createdAt: new Date().toISOString(),
                  withdraw: recomitWithdraw,
                  paid: "Not paid",
                  date_to_withdraw: "Not set",
                  fullName: this.props.user_details.fullName,
                  phoneNumber: this.props.user_details.phoneNumber,
                  availability: "available",
                  mergeWithdraw: recomitWithdraw,
                  mergeAmountPledge: datas.amountPledge,
                  pledge_start_date: "Not set",

                  recomit_status: "Not yet",
                });
                this.props.getPledgeData({
                  amountPledge: datas.amountPledge,
                  userId: this.props.userId,
                  createdAt: new Date().toISOString(),
                  withdraw: recomitWithdraw,
                  paid: "Not paid",
                  date_to_withdraw: "Not set",
                  fullName: this.props.user_details.fullName,
                  phoneNumber: this.props.user_details.phoneNumber,
                  availability: "available",
                  mergeWithdraw: recomitWithdraw,
                  mergeAmountPledge: datas.amountPledge,
                  pledge_start_date: "Not set",

                  recomit_status: "Not yet",
                });
              })
              .then((data) => {
                let referralId = this.props.user_details.referralId;
                console.log(referralId);
                if (referralId) {
                  let refBonus = (2 / 100) * datas.amountPledge;
                  let activeId = this.props.userId;
                  firestore
                    .collection("pledge")
                    .where("userId", "==", referralId)
                    .orderBy("createdAt", "desc")
                    .limit(1)
                    .get()
                    .then((ref_user) => {
                      var refPledgeId = {};
                      ref_user.forEach((data) => {
                        refPledgeId.id = data.id;
                      });
                      firestore
                        .collection("pledge")
                        .doc(`${refPledgeId.id}`)
                        .get()
                        .then((pledgeDatas) => {
                          var pledgeWithdraw = pledgeDatas.data().withdraw;
                          firestore
                            .collection("pledge")
                            .doc(`${pledgeDatas.id}`)
                            .update({
                              withdraw: pledgeWithdraw + refBonus,
                              ref_bonus: refBonus,
                              main_withdraw_without_bonus: pledgeWithdraw,
                            })
                            .then((data) => {
                              alert("Pledge recomit successful.");
                              this.setState({
                                loading: false,
                                dispayRecomitButton: "none",
                              });
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } else {
                  alert("Pledge recomit successful.");
                  this.setState({
                    loading: false,
                    dispayRecomitButton: "none",
                  });
                }
              })
              .catch((error) => {
                alert(error);
                this.setState({
                  loading: false,
                });
              });
          })
          .catch((error) => {
            alert(error);
            this.setState({
              loading: false,
            });
          });
      });
  };
  render() {
    const getTestimonies = this.props.testimonies
      ? this.props.testimonies.map((lists) => {
          return (
            <div className="card" style={{ marginBottom: "10px" }}>
              <div className="card-body" key={lists.id}>
                <h6 style={{ color: "navy", fontWeight: "bold" }}>
                  {lists.name}
                </h6>
                <p style={{ fontSize: "15px" }}>{lists.testimonies}</p>
                <h6> Time: {moment(lists.createdAt).fromNow()}</h6>
              </div>
            </div>
          );
        })
      : "";
    const currentDate = moment().format("YYYY/MM/DD HH:mm:ss");
    const withDrawDate = this.props.last_pledge_data.date_to_withdraw;
    // if (withDrawDate <= currentDate) {
    //   console.log("Commit now");
    //   console.log(currentDate);
    //   console.log(withDrawDate);
    // } else {
    //   console.log("not yet date");
    //   console.log(currentDate);
    //   console.log(withDrawDate);
    // }
    return (
      <div className="row">
        <div
          className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12"
          style={{ marginBottom: "20px" }}
        >
          <div
            className="card"
            style={{ background: "#03a9f4", color: "white" }}
          >
            <div className="card-body">
              <h5 style={{ fontWeight: "bold" }}>Active Donation</h5>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ fontWeight: "bold" }}>
                    <h6>Amount To Pledge</h6>
                    NGN{" "}
                    {this.props.last_pledge_data.amountPledge &&
                    this.props.last_pledge_data !== undefined
                      ? this.props.update_last_pledge_record
                        ? this.props.update_last_pledge_record.amountPledge
                        : this.props.last_pledge_data.amountPledge
                      : this.props.update_last_pledge_record
                      ? this.props.update_last_pledge_record.amountPledge
                      : 0}
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CreditCardIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ fontWeight: "bold" }}>
                    <h6>To Earn</h6>
                    NGN{" "}
                    {this.props.last_pledge_data.withdraw &&
                    this.props.last_pledge_data !== undefined
                      ? this.props.update_last_pledge_record
                        ? this.props.update_last_pledge_record.withdraw
                        : this.props.last_pledge_data.withdraw
                      : this.props.update_last_pledge_record
                      ? this.props.update_last_pledge_record.withdraw
                      : 0}
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ fontWeight: "bold" }}>
                    <h6>Due Date</h6>
                    {this.props.last_pledge_data.createdAt &&
                    this.props.last_pledge_data !== undefined
                      ? this.props.update_last_pledge_record
                        ? moment(
                            this.props.update_last_pledge_record.createdAt
                          ).format("YYYY-MM-DD HH:mm:ss")
                        : moment(this.props.last_pledge_data.createdAt).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )
                      : this.props.update_last_pledge_record
                      ? moment(
                          this.props.update_last_pledge_record.createdAt
                        ).format("YYYY-MM-DD HH:mm:ss")
                      : ""}
                  </div>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12"
          style={{ marginBottom: "20px" }}
        >
          <div
            className="card"
            style={{ background: "#ff9100", color: "white" }}
          >
            <div className="card-body">
              {" "}
              <h5 style={{ fontWeight: "bold" }}>Pending Donation</h5>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ fontWeight: "bold" }}>
                    <h6>Amount To Pledge</h6>
                    NGN{" "}
                    {this.props.last_pledge_data.amountPledge &&
                    this.props.last_pledge_data !== undefined
                      ? this.props.update_last_pledge_record
                        ? this.props.update_last_pledge_record.amountPledge
                        : this.props.last_pledge_data.amountPledge
                      : this.props.update_last_pledge_record
                      ? this.props.update_last_pledge_record.amountPledge
                      : 0}
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CreditCardIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ fontWeight: "bold" }}>
                    <h6>To Earn</h6>
                    NGN{" "}
                    {this.props.last_pledge_data.withdraw &&
                    this.props.last_pledge_data !== undefined
                      ? this.props.update_last_pledge_record
                        ? this.props.update_last_pledge_record.withdraw
                        : this.props.last_pledge_data.withdraw
                      : this.props.update_last_pledge_record
                      ? this.props.update_last_pledge_record.withdraw
                      : 0}
                  </div>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <div style={{ fontWeight: "bold" }}>
                    <h6>Due Date</h6>
                    {this.props.last_pledge_data.createdAt &&
                    this.props.last_pledge_data !== undefined
                      ? this.props.update_last_pledge_record
                        ? moment(this.props.update_last_pledge_record.createdAt)
                            .add(3, "days")
                            .format("YYYY-MM-DD HH:mm:ss")
                        : moment(this.props.last_pledge_data.createdAt)
                            .add(3, "days")
                            .format("YYYY-MM-DD HH:mm:ss")
                      : this.props.update_last_pledge_record
                      ? moment(this.props.update_last_pledge_record.createdAt)
                          .add(3, "days")
                          .format("YYYY-MM-DD HH:mm:ss")
                      : ""}
                  </div>
                </ListItem>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
                  {withDrawDate <= currentDate &&
                  this.props.last_pledge_data.recomit_status === "Not yet" ? (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      {this.state.loading ? (
                        <Button variant="contained" color="primary">
                          Please wait...
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() =>
                            this.handleRecomit(this.props.last_pledge_data)
                          }
                          style={{ display: this.state.dispayRecomitButton }}
                        >
                          Commit
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div style={{ fontWeight: "bold" }}>
                      Your Recommit Date: {withDrawDate ? withDrawDate : ""}
                    </div>
                  )}
                </div>
              </List>
            </div>
          </div>
        </div>

        <div
          className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12"
          style={{ height: "300px", overflowY: "scroll" }}
        >
          <div className="card" style={{ background: "navy" }}>
            <div className="card-body">
              <h5
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                  width: "100%",
                }}
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                    Testimonies
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                    {" "}
                    <AddTestimonies />
                  </div>
                </div>
              </h5>
              {getTestimonies}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  lastPledge: { last_pledge_data },
  updateLastPledge: { update_last_pledge_record },
  userId: { userId },
  userDetails: { user_details },
  testimonies: { testimonies },
}) => {
  return {
    last_pledge_data,
    update_last_pledge_record,
    userId,
    user_details,
    testimonies,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    sendPledgeData: (sendData) =>
      dispatch({ type: "pledge_data", data: sendData }),
    getPledgeData: (sendData) =>
      dispatch({ type: "upldate_pledge_data", data: sendData }),
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(SecondRowCard);
