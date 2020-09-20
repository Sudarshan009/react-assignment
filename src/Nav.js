import React, { Suspense, lazy } from "react";
import logo from "./logo.png";
import "./App.css";
import Header from "./component/Header";
import AccDetail from "./AccountDetails/AccDetail";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Contact List</li>
        <li>Home</li>
      </ul>
    </nav>
  );
}

export default Nav;
