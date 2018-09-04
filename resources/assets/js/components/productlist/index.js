import React, { Component } from "react";
import Product from "../product/";
import "../styles/styles.css";
import ScrollReveal from "scrollreveal";



class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
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

      let fadeinLeft = {
        duration: 2000,
        origin: "left",
        distance: "300px"
      };
      let fadeinRight = {
        duration: 2000,
        origin: "right",
        distance: "300px"
      };
      ScrollReveal()
        .reveal(".fadeinLeft", fadeinLeft)
        .reveal(".fadeinRight", fadeinRight)
    
  }
  overTwenty() {
    if (document.cookie.split(";").filter(function(item) {
      return item.indexOf("overTwenty=true") >= 0
   }).length) {
      return true
   }
  }

  checkForAlcohol(val) {
    if (val.ingredients.includes("Alcohol")) {
      return false
    }
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
          if (!this.overTwenty) {
            if (this.checkForAlcohol(val)) {
              return <Product key={val.id} productData={val} />;
            }
          } else {
            return <Product key={val.id} productData={val} />;
          }
        })}
      </div>
    );
  }
}

export default ProductList;
