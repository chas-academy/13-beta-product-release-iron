import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/styles.css";
import "./styles.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIngredientsList: false,
      ingredientsArray: []
    };
    this.toggleShowIngredientsListClick = this.toggleShowIngredientsListClick.bind(
      this
    );
  }
  componentDidMount() {
    this.createIngredientsArray(this.props.productData.ingredients);
  }

  toggleShowIngredientsListClick() {
    this.setState({ showIngredientsList: !this.state.showIngredientsList });
  }

  createIngredientsArray(ingredients) {
    this.setState({
      ingredientsArray: ingredients.split(",")
    });
  }

  render() {
    return (
      <div className="columns" id="products">
        <div className="column is-half">
          <h2 className={"title is-3"}>{this.props.productData.name}</h2>
          <p className="title is-6">{this.props.productData.description}</p>

          <button
            className="toggle-products-btn"
            onClick={this.toggleShowIngredientsListClick}
          >
            {(this.state.showIngredientsList && "- Close") || "+ Ingredients"}
          </button>

          <div>
            {this.state.showIngredientsList && (
              <ul>
                {this.state.ingredientsArray.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="coloumn is-half">
          <figure className="image is-horizontal-center">
            <img src={this.props.productData.imageUrl} />
          </figure>
        </div>
      </div>
    );
  }
}

export default Product;
