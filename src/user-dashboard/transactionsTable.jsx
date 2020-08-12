import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PayMentProof from "./display-payment-proof";
import UserTransactionView from "./transaction-user-view";
import moment from "moment";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TransactionsTable({
  transactionsData,
  pageSize,
  currentPage,
}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell>Time Uploaded</TableCell>
            <TableCell align="center">Payment By</TableCell>
            <TableCell align="center">Bank Name</TableCell>
            <TableCell align="center">Means Of Payment</TableCell>
            <TableCell align="center">File uploaded</TableCell>

            <TableCell align="center">Save Payment File</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionsData.map((lists, index) => (
            <TableRow key={lists.id}>
              <TableCell component="th" scope="row">
                {pageSize > currentPage
                  ? index + 1
                  : currentPage - 1 * pageSize + index + 1}
              </TableCell>
              <TableCell align="center">
                {moment(lists.createdAt).format("YYYY-MM-DD HH:mm:ss")}
              </TableCell>
              <TableCell align="center">
                <UserTransactionView userId={lists.Pay_by_id} />
              </TableCell>
              <TableCell align="center">{lists.bankName}</TableCell>
              <TableCell align="center">{lists.means_of_transaction}</TableCell>
              <TableCell align="center">
                <img
                  src={lists.payment_proof}
                  alt="proof"
                  style={{ width: "70px", height: "40px" }}
                ></img>
              </TableCell>
              <TableCell align="center">
                <PayMentProof imageShow={lists.payment_proof} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
