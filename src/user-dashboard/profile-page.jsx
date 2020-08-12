import React, { Component } from "react";
import { firestore } from "../db/config";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LinkIcon from "@material-ui/icons/Link";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BusinessIcon from "@material-ui/icons/Business";
import Skelenton from "./preloader1";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { Link, withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
class ProfilePage extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          paddingTop: "70px",
          background: "navy",
          height: "100vh",
          overflowY: "scroll",
        }}
      >
        {this.props.user_details ? (
          <div className="container col-lg-5">
            <div className="card" style={{ marginBottom: "10px" }}>
              <div className="card-body">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Full Name"
                    secondary={this.props.user_details.fullName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Username"
                    secondary={this.props.user_details.username}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <MailOutlineIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Emal Address"
                    secondary={this.props.user_details.email}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PhoneAndroidIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Phone Number"
                    secondary={this.props.user_details.phoneNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LinkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Refrral Link"
                    secondary={
                      "https://ladder-investment-66d06.firebaseapp.com" +
                      this.props.user_details.referral_link
                    }
                  />

                  {/* <Link to={this.props.user_details.referral_link}></Link> */}
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BusinessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Bank Name"
                    secondary={this.props.user_details.bankName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FormatListNumberedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Account Number"
                    secondary={this.props.user_details.accountNumber}
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccountBalanceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Account Name"
                    secondary={this.props.user_details.accountName}
                  />
                </ListItem>
              </div>
            </div>
          </div>
        ) : (
          <div className="container col-lg-5">
            <Skelenton />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ userDetails: { user_details } }) => {
  return {
    user_details,
  };
};
export default withRouter(connect(mapStateToProps)(ProfilePage));
