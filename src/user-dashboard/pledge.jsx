import React, { Component } from "react";
import { firestore } from "../db/config";
import { connect } from "react-redux";

import PledgePaginationControl from "./pledgePagination";
import PledgeTable from "./pledgeTable";
import PledgePagination from "./pledgePagination";
class Pledge extends Component {
  state = {
    pledge: [],
    currentPage: 1,
    pageSize: 25,
  };
  componentDidMount() {}
  render() {
    const PledgeDatas = this.props.pledge_details;
    const lastNumberPerPage = this.state.currentPage * this.state.pageSize;
    const firstNumberPerPage = lastNumberPerPage - this.state.pageSize;
    const getPledgeSize = PledgeDatas.slice(
      firstNumberPerPage,
      lastNumberPerPage
    );

    const handleChange = (val) => {
      this.setState({
        currentPage: val,
      });
    };
    const total = Math.ceil(PledgeDatas.length / 25);
    return (
      <div
        style={{
          paddingTop: "60px",
          background: "navy",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        <div className="container col-lg-11" style={{ paddingTop: "30px" }}>
          <div class="card">
            <div class="card-body">
              <h4
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "navy",
                }}
              >
                Pledge record
              </h4>
              <div className="col-lg-12">
                <PledgeTable
                  pledgeData={getPledgeSize}
                  pageSize={this.state.pageSize}
                  currentPage={this.state.currentPage}
                />
                <PledgePagination total={total} handleChange={handleChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  userId: { userId },
  pledgeRecords: { pledge_details },
}) => {
  return {
    userId,
    pledge_details,
  };
};

export default connect(mapStateToProps)(Pledge);
