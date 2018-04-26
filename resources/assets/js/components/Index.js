import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Vision from './Vision';
import Products from './Products';
import Events from './Events';
import Resellers from './Resellers';
import Footer from './Footer';


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
