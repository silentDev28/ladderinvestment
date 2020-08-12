import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function TransactionsPagination({ total, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={total}
        onChange={(evt, val) => handleChange(val)}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}
