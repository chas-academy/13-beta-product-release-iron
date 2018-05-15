import React, { Component } from "react";
import ReactDOM from "react-dom";
import Product from "../product/";
import "../styles/styles.css";

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
  }

  render() {
    return (
      <div className="products" id="products">
        <div className="columns">
          <div className="column is-half">
            <h1 className="title is-1">Mega Products</h1>
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
