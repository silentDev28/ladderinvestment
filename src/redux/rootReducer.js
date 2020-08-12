import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginAndRegReducer from "./login-and-regReducer";
import userDetailsReducer from "./user-details-reducer";
import userIdReducer from "./userId";
import pledgeRecordReducer from "./pledgeRecord";
import usersRecord from "./totUsersReducers";
import totPledgeRecords from "./totPledgeRecord";
import pledgeAvailability from "./pledge-availabe";
import pledgeMergerReceiver from "./pledge_merge_receiver";
import MergeUsers from "./merge-users";
import sendUploadToggle from "./upload-confirm-btn";
import toggleConfirmNotSure from "./toggle-confirm-not-sure";
import firstConfirmationBtn from "./handle-first-confirmation";
import finalConfirmBtn from "./final-confirm";
import sendLoader from "./loader";
import transactionReducer from "./transactionReducers";
import lastPledgeReducer from "./last-pledge-reducer";
import updateLastPledgeRecord from "./update_last_pledge_record";
import refUsers from "./ref_usersReducers";
import testimonies from "./testimoniesReducer";
const rootReducer = combineReducers({
  userAuth: userReducer,
  loginAndReg: loginAndRegReducer,
  userDetails: userDetailsReducer,
  userId: userIdReducer,
  pledgeRecords: pledgeRecordReducer,
  usersRecord: usersRecord,
  totPledgeRecords: totPledgeRecords,
  pledgeAvailability: pledgeAvailability,
  pledgeReceiverUserId: pledgeMergerReceiver,
  mergeUsers: MergeUsers,
  toggleState: sendUploadToggle,
  toggleNotSure: toggleConfirmNotSure,
  firstCOnfimToggle: firstConfirmationBtn,
  finalConfimToggle: finalConfirmBtn,
  loaderReducer: sendLoader,
  transactionDatas: transactionReducer,
  lastPledge: lastPledgeReducer,
  updateLastPledge: updateLastPledgeRecord,
  refUsers: refUsers,
  testimonies: testimonies,
});
export default rootReducer;
