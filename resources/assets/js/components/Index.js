import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './header/Navbar.js';
import Events from './events/Events.js';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Events />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
