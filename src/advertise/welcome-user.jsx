import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function ColorAlerts({ user_details }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success" color="info" style={{ fontWeight: "bold" }}>
        Welcome to Ladder Investment {user_details.fullName}
      </Alert>
    </div>
  );
}
const mapStateToProps = ({ userDetails: { user_details } }) => {
  return {
    user_details,
  };
};
export default connect(mapStateToProps)(ColorAlerts);
