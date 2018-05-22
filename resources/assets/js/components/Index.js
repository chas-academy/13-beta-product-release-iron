import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Vision from "./Vision";
import Banner from "./banner";
import ProductList from "./Productlist";
import EventsList from "./Eventslist";
import Resellers from "./Resellers";
import Footer from "./Footer";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Vision />
        <Banner />
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
