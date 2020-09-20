import React from "react";
import logo from "./logo.png";

function Header() {
  return (
    <div>
      <div>
        <span>IG Account Details</span>
      </div>
      <hr className="fsthr" />

      <div>
        <span>Account Details</span>

        <div className="btnclass">
          <button className="btnstyle">Update</button>
          <button className="btnstyle">Feedback</button>
        </div>
        <hr className="scndhr" />

        <div className="container">
          <div className="row">
            <div className="col-logo">
              <img className="logo" src={logo} />
            </div>
            <div className="col-lg-2 col-12">
              <span>
                ABB LTD
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </span>
              <br />
              <span className="spantext">
                Affolternstrasse 44, Zurlch
                <br />
                Zurlch, Zurlch 8085, Swltzarland
              </span>
            </div>

            <div className="col-lg-9 col-12 topleftcol">
              <span className="spantext bluetext">social.abb</span>
              <br />
              <span className="spantext">+41 433177111</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
