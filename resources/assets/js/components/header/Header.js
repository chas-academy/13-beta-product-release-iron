import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './header.css';
import flagga from './flagga.jpg'; 
import megamate_gulsvart from './megamate_gulsvart.png'; 

 class Header extends Component {
    render() {
        return (
            <header className="App-header">
              <img src={flagga} className="banner is-mobile" alt="flag" /> 
                    <img src={megamate_gulsvart} className="logo navbar-brand is-mobile is-overlay" alt="logo" />   
                        <div className="navbar-menu is-overlay"> 
                            <div className="navbar-end">
                                <a className="is-tab is-hidden-mobile navbar-customize" >Products</a>
                                <a className="is-tab is-hidden-mobile is-active navbar-customize" >Events</a>
                                <a className="is-tab is-hidden-mobile is-active navbar-customize" >Resellers</a>
                            </div>
                        </div>
            </header>
        );
    }
}
export default Header;

