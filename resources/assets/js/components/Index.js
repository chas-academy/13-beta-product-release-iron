import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Vision from "./vision";
import ProductList from "./productlist";
import EventsList from "./eventslist";
import Resellers from "./resellers";
import Footer from "./footer";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Vision />
        <ProductList />
        <EventsList />
        <Resellers />
        <Footer />
      </div>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
