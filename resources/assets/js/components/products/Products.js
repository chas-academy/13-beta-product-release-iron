import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Bottle from './JungleGinger.png';
import "./prod.css"

class Products extends Component {

    render() {
        return (
            <div className="background">
                <div className="productSite">
                    <div id="productinfo" className="productInfo">
                        <h2 className="title is-1">Mega Product</h2>
                        <h3 className="title is-3">Loui Jama - Mega Mate</h3>
                        <h4 className="title is-6">Brukar du gå hem tidigt när ni är ute och festar? vill du drycka mega god juice din mega blatte?</h4>
                    </div>
                    {/* <div className="jungelImg">
                        <img src={Bottle} />
                    </div> */}
                </div>
            </div>
        );
        
    }
}
export default Products;
