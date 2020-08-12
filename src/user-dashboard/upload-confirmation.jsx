import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import { Button } from "@material-ui/core";
import { firestore, Storage } from "../db/config";
import Banks from "../bank-api/bank-lists";
import { connect } from "react-redux";
class UploadConfirmation extends Component {
  state = {
    uploadFile: "",
    loading: false,
    MOT: "Select means of transaction",
    bankName: "Select bank name",
    totBanks: Banks,
  };
  handleUploadFile = (evt, attr) => {
    this.setState({
      [attr]: evt.target.files[0],
    });
  };
  handleTransaction = (evt, attr) => {
    this.setState({
      [attr]: evt.target.value,
    });
  };
  handleUpload = () => {
    const mergeId = localStorage.getItem("mergeId");
    const proofOfPaymentImage = this.state.uploadFile;
    if (
      proofOfPaymentImage === "" ||
      this.state.MOT === "Select means of transaction" ||
      this.state.bankName === "Select bank name"
    ) {
      alert("Please upload valid payments");
    } else {
      this.setState({
        loading: true,
      });
      const uploadTask = Storage.ref(`/images/${proofOfPaymentImage.name}`).put(
        proofOfPaymentImage
      );
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          Storage.ref("images")
            .child(proofOfPaymentImage.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
              const payTOId = this.props.match.params.id;
              firestore
                .collection("users")
                .doc(`${payTOId}`)
                .get()
                .then((user) => {
                  if (user.exists) {
                    firestore
                      .collection("transactions")
                      .add({
                        payment_proof: fireBaseUrl,
                        bankName: this.state.bankName,
                        means_of_transaction: this.state.MOT,
                        Pay_by_id: this.props.userId,
                        Pay_to_id: payTOId,
                        createdAt: new Date().toISOString(),
                      })
                      .then((data) => {
                        firestore
                          .collection("merge")
                          .doc(`${mergeId}`)
                          .update({
                            merge_status: "waiting for confirmation",
                          })
                          .then((data) => {
                            this.setState({
                              uploadFile: "",
                              loading: false,
                              bankName: "",
                              MOT: "",
                            });
                            alert("Proof of payment successful");
                            localStorage.clear();
                            window.location.href = "/userdashboard/user";
                          })
                          .catch((error) => {
                            alert(error);
                            window.location.href = `/userdashboard/user/upload-confirmation/${payTOId}`;
                          });
                      })
                      .catch((error) => {
                        alert(error);
                        window.location.href = `/userdashboard/user/upload-confirmation/${payTOId}`;
                      });
                  } else {
                    this.setState({
                      uploadFile: "",
                      loading: false,
                      bankName: "",
                      MOT: "",
                    });
                    alert("An error occur");
                    window.location.href = "/userdashboard/user";
                  }
                });
            });
        }
      );
    }
  };
  render() {
    // console.log(localStorage.getItem("mergeId"));
    // console.log(this.props.userId);
    const AllBanks = this.state.totBanks.totbank.map((lists) => {
      return (
        <option value={lists.name} key={lists.id}>
          {lists.name}
        </option>
      );
    });
    return (
      <div style={{ paddingTop: "150px", height: "100vh", background: "navy" }}>
        <div className="container col-lg-4">
          <div className="card">
            <div className="card-body" style={{ paddingBottom: "60px" }}>
              <h5
                style={{
                  textAlign: "center",
                  color: "navy",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Please upload your proof of payment
              </h5>
              <div className="col-lg-12" style={{ marginBottom: "15px" }}>
                <select
                  className="browser-default custom-select"
                  onChange={(evt) => this.handleTransaction(evt, "MOT")}
                  value={this.state.MOT}
                >
                  <option>Select means of transaction</option>
                  <option value="Internet Banking">Internet Banking</option>
                  <option value="Bank Branch">Bank Branch</option>
                  <option value="Uss">Uss</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
              <div className="col-lg-12" style={{ marginBottom: "15px" }}>
                <select
                  className="browser-default custom-select"
                  onChange={(evt) => this.handleTransaction(evt, "bankName")}
                  value={this.state.bankName}
                >
                  <option>Select bank name</option>
                  {AllBanks}
                </select>
              </div>
              <div className="input-group col-lg-12">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>

                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={(evt) => this.handleUploadFile(evt, "uploadFile")}
                    filename={this.state.uploadFile}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Choose file
                  </label>
                </div>

                <div
                  style={{ textAlign: "center", marginTop: "20px" }}
                  className="col-lg-12"
                >
                  {this.state.loading ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleUpload}
                    >
                      please wait...
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleUpload}
                    >
                      Upload
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ userId: { userId } }) => {
  return {
    userId,
  };
};
export default connect(mapStateToProps)(UploadConfirmation);
