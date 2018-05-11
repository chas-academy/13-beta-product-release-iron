import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Vision from "./Vision";
import ProductList from "./productlist";
import Events from "./Events";
import Resellers from "./Resellers";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Vision />
        <ProductList />
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
