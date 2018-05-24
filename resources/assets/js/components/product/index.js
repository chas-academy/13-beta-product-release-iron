import React, { Component } from "react";
import ReactDOM from "react-dom";
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
          <h2 className={"title is-3"} id="louiJama-subtitle">{this.props.productData.name}</h2>
          <p className="title is-6">{this.props.productData.description}</p>

          <button
            className="toggle-products-btn"
            onClick={this.toggleShowIngredientsListClick}
          >
            {(this.state.showIngredientsList && "x Close") || "+ Ingredients"}
          </button>

          <div className="ingredient-container fadeinRight">
            {this.state.showIngredientsList && (
              <ul className="ingredient-dropdown fadeinRight">
                {this.state.ingredientsArray.map((val, i) => (
                  <li className="ingredient-li" key={i}>
                    {val}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="coloumn is-half">
          <figure className="image is-horizontal-center fadeinRight">
            <img
              className="product-img"
              id="product-image"
              src={this.props.productData.imageUrl}
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default Product;
