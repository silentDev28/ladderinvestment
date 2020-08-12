import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import TransactionsPagination from "./transactionPagination";
import TransactionsTable from "./transactionsTable";
class Transaction extends Component {
  state = {
    currentPage: 1,
    pageSize: 25,
  };
  handleViewUser = (id) => {
    console.log(id);
  };

  render() {
    const transactionDatas = this.props.transactions.filter((userid) => {
      return (
        userid.Pay_by_id === this.props.userId ||
        userid.Pay_to_id === this.props.userId
      );
    });
    const handleChange = (val) => {
      this.setState({
        currentPage: val,
      });
    };

    const lastNumberPerPage = this.state.currentPage * this.state.pageSize;
    const firstNumberPerPage = lastNumberPerPage - this.state.pageSize;
    const getTransactionSize = transactionDatas.slice(
      firstNumberPerPage,
      lastNumberPerPage
    );

    const total = Math.ceil(transactionDatas.length / 25);
    return (
      <div
        style={{
          background: "navy",
          height: "100vh",
          overflowY: "scroll",
          paddingTop: "100px",
        }}
      >
        <div className="container col-lg-11">
          <div className="card">
            <div className="card-body">
              <TransactionsTable
                transactionsData={getTransactionSize}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
              />
              <TransactionsPagination
                total={total}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  transactionDatas: { transactions },
  userId: { userId },
  usersRecord: { usersRecord },
}) => {
  return {
    transactions,
    userId,
    usersRecord,
  };
};
export default connect(mapStateToProps)(Transaction);
