import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./header/Navbar.js";
import Resellers from "./resellers/index.js";
import Vision from "./vision/Vision.js";
import Footer from "./footer/index.js";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Vision />
        <Resellers />
        <Footer />
      </div>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
