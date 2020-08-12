import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import About from "./advertise/about";
import Contact from "./advertise/contacts";
import UserCont from "./user-dashboard/userCont";
import AdminLogin from "./admin/auth/admin-login";
import { Auth, firestore } from "./db/config";
import AdminReg from "./admin/auth/admin-register";
import { connect } from "react-redux";
import Home from "./advertise/home";
import AdminHome from "./admin/admin-home";
import RegisterFrom from "./user-dashboard/auth/reg-user";
import ReferrerLink from "./user-dashboard/referral-reg";
import testimonies from "./redux/testimoniesReducer";
import AdvertCover from "./advertise/advertCover";
class App extends Component {
  state = {
    userId: null,
  };
  handleUserState = null;
  componentDidMount() {
    this.handleUserState = Auth.onAuthStateChanged((user) => {
      this.props.sendAuthUser(user);
      this.props.sendUserId(user.uid);

      firestore
        .collection("users")
        .doc(`${user.uid}`)
        .get()
        .then((data) => {
          firestore
            .collection("users")
            .where("userId", "==", user.uid)
            .where(
              "referral_link",
              "==",
              `/userdashboard/reg/referrer/${user.uid}`
            )
            .get()
            .then((data) => {
              if (data.empty) {
                firestore
                  .collection("users")
                  .doc(`${user.uid}`)
                  .update({
                    referral_link: `/userdashboard/reg/referrer/${user.uid}`,
                  })
                  .then((data) => {
                    firestore
                      .collection("users")
                      .doc(`${user.uid}`)
                      .get()
                      .then((data) => {
                        this.props.sendUserDetails({ ...data.data() });
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
                  .collection("users")
                  .doc(`${user.uid}`)
                  .get()
                  .then((data) => {
                    this.props.sendUserDetails({ ...data.data() });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            });
        })

        .catch((error) => {
          console.log(error);
        });
      firestore
        .collection("pledge")
        .where("userId", "==", user.uid)
        .orderBy("createdAt", "desc")
        .get()
        .then((pledges) => {
          var pledgeRecords = [];
          pledges.forEach((pledge) => {
            pledgeRecords.push({
              id: pledge.id,
              ...pledge.data(),
            });
          });
          this.props.sendPledgeRecord(pledgeRecords);
        });

      firestore
        .collection("users")
        .get()
        .then((users) => {
          var totUsers = [];
          users.forEach((user) => {
            totUsers.push({ id: user.id, ...user.data() });
          });
          this.props.sendUsersRecord(totUsers);
        })
        .catch((error) => {
          console.log(error);
        });
      firestore
        .collection("pledge")
        .orderBy("createdAt", "desc")
        .get()
        .then((pledge) => {
          let totPledges = [];
          pledge.forEach((pledge) => {
            totPledges.push({ id: pledge.id, ...pledge.data() });
          });
          this.props.sendTotPledgeRecord(totPledges);
        })
        .catch((error) => {
          console.log(error);
        });
      firestore
        .collection("pledge")
        .where("availability", "==", "available")
        .get()
        .then((pledgeAvailable) => {
          const pledgeAvailableArray = [];
          pledgeAvailable.forEach((pledge) => {
            pledgeAvailableArray.push({ id: pledge.id, ...pledge.data() });
          });

          this.props.pledgetotAvailable(pledgeAvailableArray);
        })
        .catch((error) => {
          console.log(error);
        });
      firestore
        .collection("merge")
        .get()
        .then((data) => {
          const totMerge = [];
          data.forEach((data) => {
            totMerge.push({
              mergeId: data.id,
              ...data.data(),
            });
          });
          this.props.MergeUsers(totMerge);
        })
        .catch((error) => console.log(error));
      firestore
        .collection("transactions")
        .get()
        .then((data) => {
          let transactions = [];
          data.forEach((trans) => {
            transactions.push(trans.data());
          });
          this.props.sendTransactions(transactions);
        })
        .catch((error) => console.log(error));
      firestore
        .collection("pledge")
        .where("userId", "==", this.props.userId)
        .orderBy("createdAt", "desc")

        .get()
        .then((data) => {
          if (data.empty) {
            this.props.sendLastPledge([]);
          } else {
            this.props.sendLastPledge({
              pledgeId: data.docs[0].id,
              ...data.docs[0].data(),
            });
          }
        });
      firestore
        .collection("users")
        .where("referralId", "==", user.uid)
        .get()
        .then((ref_user) => {
          let refUsers = [];
          ref_user.forEach((users) => {
            refUsers.push(users.data());
          });
          this.props.sendRefUsers(refUsers);
        });
    });
    firestore
      .collection("testimonies")
      .orderBy("createdAt", "desc")
      .limit(10)
      .get()
      .then((datas) => {
        let totalTestimonies = [];
        datas.forEach((testimony) => {
          totalTestimonies.push({ ...testimony.data(), id: testimony.id });
        });
        this.props.sendTestimonies(totalTestimonies);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    this.handleUserState = null;
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route> */}

          <Route path="/userdashboard/user" component={UserCont}></Route>
          <Route path="/admin/login" component={AdminLogin}></Route>
          <Route path="/admin/register" component={AdminReg}></Route>
          <Route path="/admin/" component={AdminHome}></Route>
          <Route
            path="/userdashboard/reg/referrer/:id"
            component={ReferrerLink}
          ></Route>
        </Switch>
      </div>
    );
  }
}
const dispatchStateToProps = (dispatch) => {
  return {
    sendAuthUser: (sendData) => dispatch({ type: "auth_user", data: sendData }),

    sendUserId: (sendData) => dispatch({ type: "user_id", data: sendData }),
    sendUserDetails: (sendData) =>
      dispatch({ type: "user_details", data: sendData }),
    sendPledgeRecord: (sendData) =>
      dispatch({ type: "pledge_record", data: sendData }),
    sendUsersRecord: (sendData) =>
      dispatch({ type: "users_record", data: sendData }),
    sendTotPledgeRecord: (sendData) =>
      dispatch({ type: "tot_pledge_record", data: sendData }),
    pledgetotAvailable: (sendData) =>
      dispatch({ type: "pledge_available", data: sendData }),
    MergeUsers: (sendData) => dispatch({ type: "merge_users", data: sendData }),
    sendTransactions: (sendData) =>
      dispatch({ type: "transaction_data", data: sendData }),
    sendLastPledge: (sendData) =>
      dispatch({ type: "last_pledge_data", data: sendData }),
    sendRefUsers: (sendData) => dispatch({ type: "ref_users", data: sendData }),
    sendTestimonies: (sendData) =>
      dispatch({ type: "testimonies", data: sendData }),
  };
};
const mapStateToProps = ({
  userId: { userId },
  pledgeRecords: pledge_details,
}) => {
  return {
    userId,
    pledge_details,
  };
};
export default connect(mapStateToProps, dispatchStateToProps)(App);
