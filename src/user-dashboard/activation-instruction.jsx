import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { connect } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ActivationInstruction({ user_details }) {
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
        color="secondary"
        onClick={handleClickOpen}
        style={{ marginTop: "10px", marginLeft: "20px" }}
      >
        Click To Activate Account
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
          {"Account Activation Message"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {user_details ? (
              user_details.activate === "deactivated" ? (
                <div>
                  {" "}
                  To re activate your account you have to pay the sum NGN 3000
                  to this bank account number...
                </div>
              ) : (
                <div>
                  {" "}
                  To activate your account you have to pay the sum NGN 1000 to
                  this bank account number...
                </div>
              )
            ) : (
              ""
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = ({ userDetails: { user_details } }) => {
  return {
    user_details,
  };
};
export default connect(mapStateToProps)(ActivationInstruction);
