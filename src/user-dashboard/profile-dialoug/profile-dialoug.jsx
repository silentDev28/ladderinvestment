import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import BusinessIcon from "@material-ui/icons/Business";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LinkIcon from "@material-ui/icons/Link";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide({ user_details }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{ marginTop: "5px", marginRight: "5px" }}
      >
        <PersonIcon /> Profile
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
          {"User Profile"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.fullName} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.username} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.email} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PhoneAndroidIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.phoneNumber} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.referral_link} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.bankName} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FormatListNumberedRtlIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.accountNumber} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={user_details.accountName} />
            </ListItem>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapstateToProps = ({
  userDetails: { user_details },
  userId: { userId },
}) => {
  return {
    user_details,
    userId,
  };
};
export default connect(mapstateToProps)(AlertDialogSlide);
