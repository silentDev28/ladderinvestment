import React, { Component } from "react";
import { connect } from "react-redux";
import RefTable from "./ref-table";
import ReferralPagination from "./referral-pagination";
class Referrals extends Component {
  state = {
    currentPage: 1,
    pageSize: 25,
  };
  render() {
    const refDatas = this.props.ref_users;
    const lastIndexOfPage = this.state.pageSize * this.state.currentPage;
    const firstIndexOfPage = lastIndexOfPage - this.state.pageSize;
    const currentPageData = refDatas.slice(firstIndexOfPage, lastIndexOfPage);
    const totalPaginationlength = Math.ceil(
      refDatas.length / this.state.pageSize
    );
    const handleChange = (pageNumber) => {
      this.setState({
        currentPage: pageNumber,
      });
    };
    return (
      <div
        style={{
          background: "navy",
          height: "100vh",
          paddingTop: "100px",
          overflowY: "scroll",
        }}
      >
        <div class=" container col-lg-11 card">
          <div class="card-body">
            <h4
              style={{
                textAlign: "center",
                width: "100%",
                fontWeight: "bold",
                color: "navy",
              }}
            >
              Referred Users
            </h4>
            <RefTable
              refTable={currentPageData}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
            />
            <ReferralPagination
              total={totalPaginationlength}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ refUsers: { ref_users } }) => {
  return {
    ref_users,
  };
};
export default connect(mapStateToProps)(Referrals);
