import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './Voucher.css'; 

class Voucher extends Component {
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
      componentWillMount() {
        ReactModal.setAppElement('body');
     }
    
    render() {
        return (
            <section className="hero is-fullheight is-primary is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <a onClick={this.handleOpenModal} className="button is-large is-link is-rounded">Get mega voucher</a>
                        <div id="offerVoucher"></div>
                    </div>
                </div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Voucher for mega maté"
                    onRequestClose={this.handleCloseModal}
                    >
                    <h1 className="title has-text-centered">Mega party at Trädgården</h1>
                    <h2 className="subtitle has-text-centered">Lördag 23 juni!</h2>
                    <p className="has-text-centered">Gäller vid lilla baren mellan 21:00-23:30</p>
                    <div className="buttons has-addons is-right">
                        <button onClick={this.handleCloseModal} className="modalButton">Close</button>
                    </div>
                </ReactModal>                
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

