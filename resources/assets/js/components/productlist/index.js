import React, { Component } from "react";
import ReactDOM from "react-dom";
import Product from "../product/";
import "../styles/styles.css";
import ScrollReveal from 'scrollReveal';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: []
    };
  }
  componentDidMount() {
    const now = this;
    fetch("/api/products")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ productList: data });
      })
      .catch(function(error) {
        console.log(error);
      });

    let fadeIn = {
      duration: 4000,
      origin: 'bottom',
    }
    let fadeinLeft = {
      duration: 3000,
      origin: 'left',
      distance: '300px'
    }
    let fadeinRight = {
      duration: 3000,
      origin: 'right',
      distance: '300px'
    }
    let buttonFade = {
      duration: 4000,
      delay: 2000,
      origin: 'left',
    }
    ScrollReveal()
      .reveal('.fadeinLeft', fadeinLeft)
      .reveal('.fadeinRight', fadeinRight)
      .reveal('.fadeIn', fadeIn)
      .reveal('.buttonFade', buttonFade)

  }

  render() {
    return (
      <div className="products" id="products">
        <div className="columns">
          <div className="column is-half" >
            <h1 className="title is-1 fadeIn">Mega Products</h1>
          </div>
        </div>
        {this.state.productList.map((val, i) => {
          return <Product key={val.id} productData={val} />;
        })}
      </div>
    );
  }
}

export default ProductList;
