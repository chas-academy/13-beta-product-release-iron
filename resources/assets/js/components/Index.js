import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header/index.js";
import Vision from "./vision/index.js";
import Products from "./products/index.js";
import Events from "./events/index.js";
import Resellers from "./resellers/index.js";
import Footer from "./footer/index.js";


export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Vision />
        <Products />
        <Events />
        <Resellers />
        <Footer />
      </div>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
