import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoneyIcon from "@material-ui/icons/Money";
import PersonIcon from "@material-ui/icons/Person";
import { connect } from "react-redux";
import { firestore } from "../db/config";
import moment from "moment";
import DeactivateUser from "./deactivate_user";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogConfirmation1({
  expTime1,
  pay_by_userId1,
  amount_merge1,
  message1,
  mergeId1,
  usersRecord,
  pledgeId1,
  first_confirmation,
  sendAskConfirmBtn,
  sendFinalConfirmBtn,
  getFinalConfirm,
  loadingLoader,
  loader,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUserToReceive = usersRecord.find((datas) => {
    return datas.id === pay_by_userId1;
  });
  const handleFirstComfirmation = () => {
    alert("Are you sure you want to confirm payment");
    if (first_confirmation === "none") {
      sendAskConfirmBtn("block");
      sendFinalConfirmBtn("none");
    } else {
      sendAskConfirmBtn("none");
      sendFinalConfirmBtn("block");
    }
  };
  const handleNotYet = () => {
    if (getFinalConfirm === "block") {
      sendAskConfirmBtn("block");
      sendFinalConfirmBtn("none");
    } else {
      sendAskConfirmBtn("none");
      sendFinalConfirmBtn("block");
    }
  };
  const handleFinalConfirmBtn = () => {
    loadingLoader(true);
    const currentDate = new Date().toISOString();
    const date_to_withdraw = moment(currentDate)
      .add(3, "days")
      .format("YYYY/MM/DD HH:mm:mm");
    firestore
      .collection("pledge")
      .doc(`${pledgeId1}`)
      .get()
      .then((data) => {
        const help_received = data.data().withdraw - data.data().amountPledge;
        firestore
          .collection("pledge")
          .doc(`${pledgeId1}`)
          .update({
            paid: "Paid",
            pledge_start_date: new Date().toISOString(),
            date_to_withdraw: date_to_withdraw,
            help_received,
          })
          .then((data) => {
            firestore
              .collection("merge")
              .doc(`${mergeId1}`)
              .update({
                merge_status: "successful",
                amount_paid: amount_merge1,
              })
              .then((data) => {
                loadingLoader(false);
                alert("Confirmation Successful!!!");
                window.location.href = "/userdashboard/user";
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            loadingLoader(false);
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Button variant="container" color="secondary" onClick={handleClickOpen}>
        view
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{message1}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Button
              variant="contained"
              color="primary"
              onClick={handleFirstComfirmation}
              style={{ display: first_confirmation }}
            >
              Confirm Payment
            </Button>
            <div style={{ display: getFinalConfirm }}>
              <div>
                {loader ? (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                  >
                    Please wait...
                  </Button>
                ) : (
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                      onClick={handleFinalConfirmBtn}
                    >
                      Yes confirm payment
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleNotYet}
                    >
                      Not yet
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Full Name"
                  secondary={getUserToReceive.fullName}
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Username"
                  secondary={getUserToReceive.username}
                />
              </ListItem>

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneAndroidIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Phone Number"
                  secondary={getUserToReceive.phoneNumber}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MoneyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Amount" secondary={amount_merge1} />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <span style={{ fontWeight: "bold", width: "100%" }}>
            Time for transaction to end is{" "}
            <AccessTimeIcon style={{ marginRight: "5px" }} />
            <strong style={{ color: "red" }}>{expTime1}</strong>
            <div>
              <DeactivateUser userId={pay_by_userId1} mergeId={mergeId1} />
            </div>
          </span>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = ({
  usersRecord: { usersRecord },
  firstCOnfimToggle: { first_confirmation },
  finalConfimToggle: { getFinalConfirm },
  loaderReducer: { loader },
}) => {
  return {
    usersRecord,
    first_confirmation,
    getFinalConfirm,
    loader,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    sendAskConfirmBtn: (sendData) =>
      dispatch({ type: "send_ask_confirmation", data: sendData }),
    sendFinalConfirmBtn: (sendData) =>
      dispatch({ type: "final_confirm", data: sendData }),
    loadingLoader: (sendData) => dispatch({ type: "loader", data: sendData }),
  };
};
export default connect(
  mapStateToProps,
  dispatchStateToProps
)(AlertDialogConfirmation1);
