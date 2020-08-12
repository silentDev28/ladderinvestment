import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function PledgeTable({ pledgeData, pageSize, currentPage }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell>Time</TableCell>
            <TableCell align="center">Amount Pledge</TableCell>
            <TableCell align="center">Paid</TableCell>
            <TableCell align="center">Pledge Time</TableCell>
            <TableCell align="center">Withdraw Bonus</TableCell>
            <TableCell align="center">Withdraw Date</TableCell>
            <TableCell align="center">Referral Bonus</TableCell>
            <TableCell align="center">Initial Withdraw</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pledgeData.map((pledge, index) => (
            <TableRow key={pledge.id}>
              <TableCell component="th" scope="row">
                {pageSize > currentPage
                  ? index + 1
                  : currentPage - 1 * pageSize + index + 1}
              </TableCell>
              <TableCell align="center">
                {moment(pledge.createdAt).fromNow()}
              </TableCell>
              <TableCell align="center">{pledge.amountPledge}</TableCell>
              <TableCell align="center">{pledge.paid}</TableCell>
              <TableCell align="center">
                {moment(pledge.createdAt).utc().format("YYYY-MM-DD T HH:mm:ss")}
              </TableCell>
              <TableCell align="center">{pledge.withdraw}</TableCell>
              <TableCell align="center">{pledge.date_to_withdraw}</TableCell>
              <TableCell align="center">
                {pledge.ref_bonus ? pledge.ref_bonus : 0}
              </TableCell>
              <TableCell align="center">
                {pledge.main_withdraw_without_bonus
                  ? pledge.main_withdraw_without_bonus
                  : pledge.withdraw}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
