import React, { Suspense, lazy } from "react";

import "./App.css";
import Header from "./component/Header";
import ContHead from "./component/ContactHeader";
import AccDetail from "./AccountDetails/AccDetail";
import Nav from "./Nav";
// import { BrwoserRouter, Switch, Route } from "react-router-dom";
const ContactList = lazy(() => import("./ContactDetails/ContactList"));

function App() {
  return (
    // <BrwoserRouter>
    <div className="App">
      <div className="main">
        <Nav />
        {/* <Route path="/about" component={About} /> */}
        <Header />

        <AccDetail />
      </div>

      <div className="main">
        <ContHead />
        <Suspense fallback={<div>Please wait...</div>}>
          <div className="ContactColumn">
            <ContactList />
          </div>
        </Suspense>
      </div>
    </div>
    // </BrwoserRouter>
  );
}

export default App;
