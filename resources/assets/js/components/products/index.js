import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LouiJama from '../images/megaMate_louiJama.png';
import JungleGinger from '../images/megaMate_jungleGinger.png';
import '../styles/styles.css';


class Products extends Component {
	render() {
	  return (
				<div className="products" id="products">
				
		  <div className="columns">
			<div className="column is-half">
			  <h1 className="title is-1">Mega Products</h1>
			  <h2 className="title is-3 louiJama-subtitle">Loui Jama</h2>
			  <p className="title is-6">Loui Jama is a mega dance party drink</p>
	
				<div class="dropdown is-hoverable">
					<div class="dropdown-trigger is-active">
						<button class="button ingredbtn" aria-haspopup="true" aria-controls="dropdown-menu4">
							<span>Ingredients</span>
						</button>
					</div>
					<div class="dropdown-menu" id="dropdown-menu4" role="menu">
						<div class="dropdown-content">
							<div class="dropdown-item">
							<p className="title is-6" id="ingred">33cl Energidryck
							Ingredienser: vatten, äpplejuice från koncentrat (10%), socker, arom, syra (E330, E331), mate extrakt, koffein, konserveringsmedel (E202)
							Hög koffeinhalt. Rekommenderas ej för barn och gravida eller ammande kvinnor</p>      
							</div>
						</div>
					</div>
					</div>
					</div>

	


			<div className="coloumn is-half">
			  <figure className="image is-horizontal-center">
				<img id="louiJama" src={LouiJama} />
			  </figure>
			</div>
		  </div>

		  <div className="columns">
			<div className="column is-half">
		   	<h2 className="title is-3 jungleGinger-subtitle">Jungle Ginger</h2>
				<p className="title is-6">Ingredients</p>
				</div>
				
				
						<div className="coloumn is-half">
							<figure className="image is-horizontal-center">
								<img id="jungleGinger" src={JungleGinger} />
							</figure>
						</div>
					</div>		 
		</div>
	  );
	}
}

export default Products;