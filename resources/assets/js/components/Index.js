import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Vision from "./vision";
import Banner from "./banner";
import ProductList from "./productlist";
import EventsList from "./eventslist";
import Resellers from "./resellers";
import Footer from "./footer";
import GoogleAnalytics from "./react-ga";

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
        <GoogleAnalytics />
      </div>
    );
  }
}

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
