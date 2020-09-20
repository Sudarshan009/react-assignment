import { render } from "@testing-library/react";
import React from "react";
import logo from "./logo.png";

function ContHead() {
  return (
    <div className="pgheader">
      <div>
        <span>Contact List</span>
      </div>
      <hr className="fsthr" />

      <div>
        <span>Contacts (4992)</span>

        <div className="btnclass">
          <button className="btnstyle">Update</button>
          <button className="btnstyle">Feedback</button>
        </div>
        <hr className="scndhr" />
      </div>
    </div>
  );
}

export default ContHead;
