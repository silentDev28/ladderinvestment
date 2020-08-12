import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import moment from "moment";
import { connect } from "react-redux";
import { firestore } from "../db/config";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AddMergeDialoug({
  receiver_userId,
  pledge_available,
  userWithDraw,
  pledgeId,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  var totBalWithdraw = userWithDraw;
  const handleMerge = (datas) => {
    firestore
      .collection("merge")
      .add({
        pay_to_user: receiver_userId,
        ...datas,
      })
      .then((data) => {
        firestore
          .collection("pledge")
          .doc(`${pledgeId}`)
          .update({ availability: "Merged to pay" })
          .then((data) => {
            alert("user successfully marged");
            window.location.href = "/admin/pledges";
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAvailableMerge = pledge_available.map((available_pledges) => {
    return (
      <tr>
        <th scope="row">#</th>
        <td>{available_pledges.fullName}</td>
        <td>{available_pledges.phoneNumber}</td>
        <td>{available_pledges.amountPledge}</td>
        <td>{available_pledges.availability}</td>
        <td>{available_pledges.userId}</td>
        <td>
          {moment(available_pledges.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </td>
        <td>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              handleMerge({
                fullName: available_pledges.fullName,
                phoneNumber: available_pledges.phoneNumber,
                pledgeAmount: available_pledges.amountPledge,
                pay_by_user: available_pledges.userId,
                createdAt: new Date().toISOString(),
                id: available_pledges.id,
              })
            }
          >
            Merge
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Marge
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
          {"User to withdraw NGN" + totBalWithdraw}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div class="table-responsive text-nowrap">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Amount Pledge</th>
                    <th scope="col">Availability</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Pledge Time</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{getAvailableMerge}</tbody>
              </table>
            </div>
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
const mapStateToProps = ({ pledgeAvailability: { pledge_available } }) => {
  return {
    pledge_available,
  };
};
export default connect(mapStateToProps)(AddMergeDialoug);
