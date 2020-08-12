import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Button from "@material-ui/core/Button";
import { firestore } from "../db/config";
class MergeUsers extends Component {
  state = {};
  componentDidMount() {}
  handleClick = (datas) => {
    const receiverUserId = datas.receiverUserId;
    const receiverWithdraw = datas.receiverWithdraw;
    const receiverPledgeId = datas.receiverPledgeId;
    const payerPledgeId = datas.payerPledgeId;
    const payerUserId = datas.payerUserId;
    const payerAmount = datas.payerAmount;
    const withDrawBalance = receiverWithdraw - payerAmount;
    if (receiverWithdraw > payerAmount) {
      firestore
        .collection("pledge")
        .doc(`${receiverPledgeId}`)
        .update({
          mergeWithdraw: withDrawBalance,
        })
        .then((data) => {
          const dateMerge = new Date().toISOString();
          const expDateNight = moment(dateMerge)
            .add(8, "hours")
            .format("YYYY-MM-DD hh:mm A");
          const expDateMorning = moment(dateMerge)
            .add(4, "hours")
            .format("YYYY-MM-DD hh:mm A");
          const getHours = moment(dateMerge).format("HH");
          if (getHours >= 18) {
            firestore
              .collection("merge")
              .add({
                pay_to_user: receiverUserId,
                pay_by_user: payerUserId,
                amount_merged: payerAmount,
                createdAt: new Date().toISOString(),
                pay_by_user_time_exp: expDateNight,
                pledgeId: payerPledgeId,
              })

              .then((data) => {
                firestore
                  .collection("pledge")
                  .doc(`${payerPledgeId}`)
                  .update({
                    availability: "merged",
                  })
                  .then(() => {
                    alert("Merge succssfull");
                    window.location.href = "/admin/merge-users";
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            firestore
              .collection("merge")
              .add({
                pay_to_user: receiverUserId,
                pay_by_user: payerUserId,
                amount_merged: payerAmount,
                createdAt: new Date().toISOString(),
                pay_by_user_time_exp: expDateMorning,
                pledgeId: payerPledgeId,
              })

              .then((data) => {
                firestore
                  .collection("pledge")
                  .doc(`${payerPledgeId}`)
                  .update({
                    availability: "merged",
                  })
                  .then(() => {
                    alert("Merge succssfull");
                    window.location.href = "/admin/merge-users";
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (receiverWithdraw < payerAmount) {
      const newPayerAmount = payerAmount - receiverWithdraw;
      const payerToPay = payerAmount - newPayerAmount;
      const newWithBalance = payerToPay - receiverWithdraw;
      const newPledgeAmount = newPayerAmount;

      firestore
        .collection("pledge")
        .doc(`${receiverPledgeId}`)
        .update({ mergeWithdraw: newWithBalance })
        .then(() => {
          if (newWithBalance === 0) {
            firestore
              .collection("pledge")
              .doc(`${receiverPledgeId}`)
              .update({ availability: "merge completed" })
              .then((data) => {
                const dateMerge = new Date().toISOString();
                const expDateNight = moment(dateMerge)
                  .add(8, "hours")
                  .format("YYYY-MM-DD hh:mm A");
                const expDateMorning = moment(dateMerge)
                  .add(4, "hours")
                  .format("YYYY-MM-DD hh:mm A");
                const getHours = moment(dateMerge).format("HH");
                if (getHours >= 18) {
                  firestore
                    .collection("merge")
                    .add({
                      pay_to_user: receiverUserId,
                      pay_by_user: payerUserId,
                      amount_merged: payerToPay,
                      createdAt: new Date().toISOString(),
                      pay_by_user_time_exp: expDateNight,
                      pledgeId: payerPledgeId,
                    })
                    .then((data) => {
                      firestore
                        .collection("pledge")
                        .doc(`${payerPledgeId}`)
                        .update({
                          mergeAmountPledge: newPledgeAmount,
                        })
                        .then((data) => {
                          alert("merge successful");
                          window.location.href = "/admin/merge-users";
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                } else {
                  firestore
                    .collection("merge")
                    .add({
                      pay_to_user: receiverUserId,
                      pay_by_user: payerUserId,
                      amount_merged: payerToPay,
                      createdAt: new Date().toISOString(),
                      pay_by_user_time_exp: expDateMorning,
                      pledgeId: payerPledgeId,
                    })
                    .then((data) => {
                      firestore
                        .collection("pledge")
                        .doc(`${payerPledgeId}`)
                        .update({
                          mergeAmountPledge: newPledgeAmount,
                        })
                        .then((data) => {
                          alert("merge successful");
                          window.location.href = "/admin/merge-users";
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            return "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const dateMerge = new Date().toISOString();
      const expDateNight = moment(dateMerge)
        .add(8, "hours")
        .format("YYYY-MM-DD hh:mm A");
      const expDateMorning = moment(dateMerge)
        .add(4, "hours")
        .format("YYYY-MM-DD hh:mm A");
      const getHours = moment(dateMerge).format("HH");
      if (getHours >= 18) {
        firestore
          .collection("merge")
          .add({
            pay_to_user: receiverUserId,
            pay_by_user: payerUserId,
            amount_merged: payerAmount,
            createdAt: new Date().toISOString(),
            pay_by_user_exp_time: expDateNight,
            pledgeId: payerPledgeId,
          })
          .then((data) => {
            firestore
              .collection("pledge")
              .doc(`${payerPledgeId}`)
              .update({
                availability: "merged",
              })
              .then((data) => {
                firestore
                  .collection("pledge")
                  .doc(`${receiverPledgeId}`)
                  .update({ availability: "merge completed" })
                  .then((data) => {
                    alert("merged Successful");
                    window.location.href = "/admin/merge-users";
                  })
                  .catch((error) => [console.log(error)]);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        firestore
          .collection("merge")
          .add({
            pay_to_user: receiverUserId,
            pay_by_user: payerUserId,
            amount_merged: payerAmount,
            createdAt: new Date().toISOString(),
            pay_by_user_exp_time: expDateMorning,
            pledgeId: payerPledgeId,
          })
          .then((data) => {
            firestore
              .collection("pledge")
              .doc(`${payerPledgeId}`)
              .update({ availability: "merged" })
              .then((data) => {
                firestore
                  .collection("pledge")
                  .doc(`${receiverPledgeId}`)
                  .update({
                    availability: "merge completed",
                  })
                  .then((data) => {
                    alert("merged Successful");
                    window.location.href = "/admin/merge-users";
                  })
                  .catch((error) => [console.log(error)]);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };
  render() {
    const dateMerge = "2020-07-16T21:41:19.770Z";
    const expDateNight = moment(dateMerge)
      .add(8, "hours")
      .format("YYYY-MM-DD hh:mm A");
    const expDateMorning = moment(dateMerge)
      .add(4, "hours")
      .format("YYYY-MM-DD hh:mm A");
    const activeDate = moment(dateMerge).format("hh:mm A");
    const getHours = moment(dateMerge).format("HH");
    if (getHours >= 18) {
      console.log(expDateNight);
    } else {
      console.log(expDateMorning);
    }
    const userWatingToBeMerge = this.props.pledgeRecord.filter((datas) => {
      return datas.availability === "waiting to be merge to pay";
    });

    return (
      <div style={{ paddingTop: "100px" }}>
        <div className="container col-lg-11">
          <div className="card">
            <div className="card-body">
              <h4
                style={{
                  color: "navy",
                  width: "100%",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Merge users
              </h4>
              {userWatingToBeMerge.map((datas) => {
                return (
                  <div>
                    {datas.fullName} to collect NGN{datas.mergeWithdraw}
                    <h4> Available pledges</h4>
                    {this.props.pledge_available.map((lists) => {
                      return (
                        <div style={{ marginBottom: "10px" }}>
                          {lists.fullName} wants to pledge NGN
                          {lists.mergeAmountPledge}{" "}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                              this.handleClick({
                                receiverUserId: datas.userId,
                                receiverWithdraw: datas.mergeWithdraw,
                                receiverPledgeId: datas.id,
                                payerUserId: lists.userId,
                                payerAmount: lists.mergeAmountPledge,
                                payerPledgeId: lists.id,
                              })
                            }
                          >
                            Merge
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  pledgeAvailability: { pledge_available },
  totPledgeRecords: { pledgeRecord },
}) => {
  return {
    pledge_available,
    pledgeRecord,
  };
};
export default connect(mapStateToProps)(MergeUsers);
