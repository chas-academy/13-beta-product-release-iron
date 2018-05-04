import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from '../product/';
import LouiJama from '../images/megaMate_louiJama.png';
import JungleGinger from '../images/megaMate_jungleGinger.png';
import '../styles/styles.css';


class ProductList extends Component {
	
	constructor() {
		super();
		this.state = {
			productList: [
				{
				subtitle: 'Loui Jama',
				subtitleClass: 'louiJama-subtitle',
				description: 'Loui Jama is a mega dance party drink',
				ingredientsList: ["Water", "Applejuice", "Sugar", "Arom", "Syra"],
				imageUrl: LouiJama
				},
				
				{
					subtitle: 'Jungle Ginger',
					subtitleClass: 'jungleGinger-subtitle',
					description: 'Drink Mix is a mega dance party drink',
					ingredientsList: ["Water", "Applejuice", "Sugar", "Arom", "Syra"],
					imageUrl: JungleGinger
				} 

			]
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
					{this.state.productList.map((val, i) => 
						<Product key={val.subtitle} productData={val} />
						)}
			</div>		 
	  );
	}
}

export default ProductList;