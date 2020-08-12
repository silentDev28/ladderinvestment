import React from "react";
import Loader from "react-loader-spinner";
export default class BackLoader extends React.Component {
  render() {
    return (
      <div className="back-loader">
        <div className="loader">
          <Loader type="Oval" color="navy" height={100} width={100} />
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "10px",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Loading...
          </div>
        </div>
      </div>
    );
  }
}
