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
              <h2 className="title is-3">Loui Jama - Mega Mate</h2>
              <p className="title is-6">
                Ingredients</p>
            </div>
  
            <div className="coloumn is-half">
              <figure className="image is-horizontal-center">
                <img id="louiJama" src={LouiJama} />
              </figure>
            </div>
            </div>

            <div className="columns">
            <div className="column is-half">
            <h1 className="title is-1">Mega Products</h1>
            <h2 className="title is-3">Jungle Ginger - Mega Mate</h2>
            <p className="title is-6">
              Ingredients</p>
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





/* 
class Products extends Component {

    render() {
        return (
            <div>
                <div className="columns is-desktop">
                    <div className="productSite column is-half">
                        <div className="productInfo">
                                <h1 className="title is-1">Mega Product</h1>
                                <h2 className="title is-3">Loui Jama - Mega Mate</h2>
                                <h4 className="title is-6">Brukar du gå hem tidigt när ni är ute och festar? vill du drycka mega god juice din mega blatte?</h4>
                            
                            </div>

                            { <div className="jungelImg">
                                <img src={LouiJama} />
                            </div> }
                            
                            <div className="productSite column is-half">
                                <div className="productInfo">
                                <h2 className="title is-3">Jungle Ginger - Mega Mate</h2>
                                <h4 className="title is-6">Brukar du gå hem tidigt när ni är ute och festar? vill du drycka mega god juice din mega blatte?</h4>
                            </div>
                            
                            { <div className="jungelImg">
                                <img src={JungleGinger} />
                            </div> }
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}
export default Products; */ 