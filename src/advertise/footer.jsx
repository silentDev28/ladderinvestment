import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from "../images/ladderinvestment.png";
const FooterPage = () => {
  return (
    <MDBFooter
      className="font-small pt-4 mt-4"
      style={{ background: " #371979" }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <p style={{ fontWeight: "bold" }}>
              <div>
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "200px", height: "80px" }}
                ></img>
              </div>
              <div>simple, reliable fundraising platform.</div>
            </p>
          </MDBCol>
          <MDBCol md="6"></MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: ladder investment
          {/* <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
