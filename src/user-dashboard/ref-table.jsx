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

export default function RefTable({ refTable, pageSize, currentPage }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="center">Full Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Email Address</TableCell>
            <TableCell align="center">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {refTable.map((datas, index) => (
            <TableRow key={datas.id}>
              <TableCell component="th" scope="row">
                {pageSize > currentPage
                  ? index + 1
                  : currentPage - 1 * pageSize + index + 1}
              </TableCell>
              <TableCell align="center">{datas.fullName}</TableCell>
              <TableCell align="center">{datas.username}</TableCell>
              <TableCell align="center">{datas.email}</TableCell>
              <TableCell align="center">{datas.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
