import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './header/Navbar.js';
import Events from './events/Events.js';
import Products from './products/Products.js';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Events />
                <Products />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
