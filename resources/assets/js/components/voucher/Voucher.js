import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Voucher extends Component {
    
    showVoucher() {
        alert("Show this to get a free mega mate!");
    }
    
    render() {
        return (
            <section className="hero is-fullheight is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <a onClick={this.showVoucher} className="button is-large is-link is-rounded">Get mega voucher</a>
                    </div>
                </div>                
                    <div className="level-right">
                        <a className="button is-info is-outlined" href="http://localhost:8000">Go to homepage</a>
                    </div>
            </section>
        );
    }
}

export default Voucher;

if (document.getElementById('voucher')) {
    ReactDOM.render(<Voucher />, document.getElementById('voucher'));
}

