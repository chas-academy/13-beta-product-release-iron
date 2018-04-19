import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Vision from './vision/Vision.js';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Vision />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
