import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import { firestore } from "../db/config";
import DeactivateUser from "./deactivate_user";
import AlertDialogConfirmation from "./alert-dialoug-confirm";
import AlertDialogConfirmation1 from "./alert-to-pay-dialoug";
class MergAlert extends Component {
  state = {
    card: "none",
    fullName: "",
    username: "",
    phoneNumber: "",
    amountMerged: "",
    bankName: "",
    accountName: "",
    accountNumber: "",
    datails: "",
    timeExp: "",
    confirmSure: "none",
    paymentBtn: "block",
    userId: "",
    mergeId: "",
    loadingConfirmation: false,
  };
  handlePayTo = (id, amountMerged, details, exptime, mergeId) => {
    console.log(mergeId);
    this.props.usersRecord.find((user) => {
      return user.id === id
        ? this.setState({
            fullName: user.fullName,
            phoneNumber: user.phoneNumber,
            accountName: user.accountName,
            accountNumber: user.accountNumber,
            bankName: user.bankName,
            amountMerged: amountMerged,
            username: "",
            details,
            timeExp: exptime,
            userId: id,
            mergeId,
          })
        : "";
    });
  };
  handlePayBy = (id, amountMerged, details, exptime, mergeId) => {
    console.log(mergeId);
    this.props.usersRecord.find((user) => {
      return user.id === id
        ? this.setState({
            fullName: user.fullName,
            username: user.username,
            phoneNumber: user.phoneNumber,
            amountMerged: amountMerged,
            bankName: "",
            accountName: "",
            accountNumber: "",
            details,
            timeExp: exptime,
            userId: id,
            mergeId,
            confirmMergeOption: "none",
            hideQuestingBtn: "block",
          })
        : "";
    });
  };
  // handleWarning = () => {
  //   alert("Are you sure you have paid?");
  //   this.setState({
  //     confirmSure: "block",
  //     paymentBtn: "none",
  //   });
  // };
  // notSurePayment = () => {
  //   this.setState({
  //     confirmSure: "none",
  //     paymentBtn: "block",
  //   });
  // };
  // handleMergePaid = () => {
  //   alert("Are you sure you want to confirm payment");
  //   this.setState({
  //     confirmMergeOption: "block",
  //     hideQuestingBtn: "none",
  //   });
  // };
  // handleNotYetMergePaid = () => {
  //   this.setState({
  //     confirmMergeOption: "none",
  //     hideQuestingBtn: "block",
  //   });
  // };
  // handleOnComifmation = () => {
  //   // console.log(this.state.mergeId);
  //   this.setState({
  //     loadingConfirmation: true,
  //   });
  //   firestore
  //     .collection("merge")
  //     .doc(`${this.state.mergeId}`)
  //     .update({ merged_transaction: "Successful" })
  //     .then((data) => {
  //       this.setState({
  //         loadingConfirmation: false,
  //       });
  //       alert("Confirmation successful!!!");
  //       window.location.href = "/userdashboard/user";
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  render() {
    const getIndividualMerge = this.props.mergeUsers
      ? this.props.mergeUsers.filter((datas) => {
          return (
            datas.pay_to_user === this.props.userId ||
            datas.pay_by_user === this.props.userId
          );
        })
      : "";
    const IndividualMessage = getIndividualMerge
      ? getIndividualMerge.map((datas) => {
          return datas.merge_status === "successful" ||
            datas.merge_status === "not successful" ? (
            ""
          ) : datas.pay_by_user === this.props.userId ? (
            <div
              className="alert alert-warning"
              role="alert"
              key={datas.pay_to_user}
            >
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                You have been merged to pay
              </span>
              <AlertDialogConfirmation
                pay_to_userId={datas.pay_to_user}
                amount_merge={datas.amount_merged}
                message={`You have been merged to pay ${datas.amount_merged} to:`}
                expTime={datas.pay_by_user_time_exp}
                merge={datas.mergeId}
              />
            </div>
          ) : (
            <div
              class="alert alert-warning"
              role="alert"
              key={datas.pay_by_user}
            >
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                This user have been merged to pay you{" "}
              </span>
              <AlertDialogConfirmation1
                pay_by_userId1={datas.pay_by_user}
                amount_merge1={datas.amount_merged}
                message1={`This user has been merged to pay you ${datas.amount_merged}`}
                expTime1={datas.pay_by_user_time_exp}
                mergeId1={datas.mergeId}
                pledgeId1={datas.pledgeId}
              />
            </div>
          );
        })
      : "";

    return (
      <div>
        <div>{IndividualMessage}</div>
      </div>
    );
  }
}
const mapStateToProps = ({
  mergeUsers: { mergeUsers },
  userId: { userId },
  usersRecord: { usersRecord },
}) => {
  return {
    mergeUsers,
    userId,
    usersRecord,
  };
};
export default connect(mapStateToProps)(MergAlert);
