import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LouiJama from '../images/megaMate_louiJama.png';
import JungleGinger from '../images/megaMate_jungleGinger.png';
import '../styles/styles.css';


class Product extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			showIngredientsList: false 
		}
		this.toggleShowIngredientsListClick = this.toggleShowIngredientsListClick.bind(this);
	}

 	toggleShowIngredientsListClick() {
		this.setState({showIngredientsList: !this.state.showIngredientsList});
	}

	render() {

		const listItems = this.props.productData.ingredientsList.map((val, i) => 
		<li key={i}>{val}</li>
		);

	  return (
				<div className="columns">
					<div className="column is-half">
						<h2 className={"title is-3 "+this.props.productData.subtitleClass}>{this.props.productData.subtitle}</h2>
						<p className="title is-6">{this.props.productData.description}</p>
						
						<button name="lji" id="lji"
						 onClick={this.toggleShowIngredientsListClick}
						>
						{(this.state.showIngredientsList &&
							"-"	) || "+"	
						}</button>

						<div>
						{this.state.showIngredientsList &&
							<ul>{listItems}</ul>			
						}
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