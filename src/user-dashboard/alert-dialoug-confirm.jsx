import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoneyIcon from "@material-ui/icons/Money";
import { Alert, AlertTitle } from "@material-ui/lab";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BusinessIcon from "@material-ui/icons/Business";
import Skelenton from "./preloader1";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import ImageIcon from "@material-ui/icons/Image";
import { connect } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogConfirmation({
  pay_to_userId,
  amount_merge,
  message,
  expTime,
  merge,
  usersRecord,
  sendToggle,
  getToggleState,
  sendNewToggle,
  getNewToggleState,
  mergeUsers,
}) {
  const [open, setOpen] = React.useState(false);
  const getIndividualMerge = mergeUsers.find((data) => {
    return data.mergeId === merge;
  });

  const handleComfirmToggle = () => {
    alert("Are you sure you have paid ?");
    if (getToggleState === "block") {
      sendToggle("none");
      sendNewToggle("block");
    } else {
      sendToggle("block");
      sendNewToggle("none");
    }
  };
  const handleHideConfirm = () => {
    if (getNewToggleState === "none") {
      sendToggle("none");
      sendNewToggle("block");
    } else {
      sendToggle("block");
      sendNewToggle("none");
    }
  };
  const handleClickOpen = () => {
    setOpen(true);

    // console.log(pay_to_userId);
    // console.log(amount_merge);
    // console.log(message);
    // console.log(expTime);
    // console.log(merge);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getUserToReceive = usersRecord.find((datas) => {
    return datas.id === pay_to_userId;
  });
  const handleFinalPaymentSuccessfulBtn = () => {
    localStorage.setItem("mergeId", merge);
  };
  return (
    <div>
      <Button variant="container" color="secondary" onClick={handleClickOpen}>
        view
      </Button>
      {getIndividualMerge.merge_status ? (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              Payment Message
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  <strong> {getIndividualMerge.merge_status}</strong>
                </Alert>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{message}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <h5 style={{ fontWeight: "bold", color: "navy" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleComfirmToggle}
                    style={{ display: getToggleState }}
                  >
                    Upload payment
                  </Button>
                </h5>
                <div style={{ display: getNewToggleState }}>
                  <Link
                    to={
                      "/userdashboard/user/upload-confirmation/" + pay_to_userId
                    }
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                      onClick={handleFinalPaymentSuccessfulBtn}
                    >
                      Yes payment is successful
                    </Button>
                  </Link>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleHideConfirm}
                  >
                    Not sure
                  </Button>
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
                    <ListItemText
                      primary="Amount Merged"
                      secondary={amount_merge}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BusinessIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Bank Name"
                      secondary={getUserToReceive.bankName}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AccountBalanceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Account Name"
                      secondary={getUserToReceive.accountName}
                    />
                  </ListItem>

                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FormatListNumberedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Account Number"
                      secondary={getUserToReceive.accountNumber}
                    />
                  </ListItem>
                </List>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <div style={{ width: "100%" }}>
                <span style={{ fontWeight: "bold" }}>
                  Time for transaction to end is{" "}
                  <AccessTimeIcon style={{ marginRight: "5px" }} />
                  <strong style={{ color: "red" }}>{expTime}</strong>
                </span>
              </div>

              <Button onClick={handleClose} color="primary">
                close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = ({
  usersRecord: { usersRecord },
  toggleState: { getToggleState },
  toggleNotSure: { getNewToggleState },
  mergeUsers: { mergeUsers },
}) => {
  return {
    usersRecord,
    getToggleState,
    getNewToggleState,
    mergeUsers,
  };
};
const dispatchStateToProps = (dispatch) => {
  return {
    sendToggle: (sendData) => dispatch({ type: "toggle_data", data: sendData }),
    sendNewToggle: (sendData) =>
      dispatch({ type: "toggle_confirm", data: sendData }),
  };
};
export default connect(
  mapStateToProps,
  dispatchStateToProps
)(AlertDialogConfirmation);
