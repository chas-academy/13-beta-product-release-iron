import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header/Header.js";
import Vision from "./vision/Vision.js";
import Products from "./products/Products.js";
import Events from "./events/Events.js";
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
