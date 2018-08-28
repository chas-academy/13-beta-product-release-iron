import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Vision from "./vision";
import Banner from "./banner";
import ProductList from "./productlist";
import EventsList from "./eventslist";
import Resellers from "./resellers";
import Footer from "./footer";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

  }
  
  componentWillMount() {
    if (window.confirm("Are u over 21, motherfcker?!")) {
      // This setState will show all drinks      
    } else {
      console.log("is false")
      // this setState will filter out alcohol drinks
    }
  }


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

export default index;