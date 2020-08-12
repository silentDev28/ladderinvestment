import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide({ userId, usersRecord }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const IndividualRecords = usersRecord.find((user) => {
    return user.id === userId;
  });
  console.log(IndividualRecords.fullName);
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"User details"}
        </DialogTitle>
        <DialogContent>
          {IndividualRecords ? (
            <DialogContentText id="alert-dialog-slide-description">
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Full Name"
                    secondary={IndividualRecords.fullName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MailOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary={IndividualRecords.email}
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
                    secondary={IndividualRecords.phoneNumber}
                  />
                </ListItem>
              </List>
            </DialogContentText>
          ) : (
            ""
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = ({ usersRecord: { usersRecord } }) => {
  return {
    usersRecord,
  };
};
export default connect(mapStateToProps)(AlertDialogSlide);
