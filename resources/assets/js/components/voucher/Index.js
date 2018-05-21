import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import "./styles.css";

class Voucher extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showVoucher: false,
      vouchers: [],
      voucher: []
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentDidMount() {
    const now = this;
    fetch("api/voucher")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ vouchers: data });
        now.checkAllVouchers();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  componentWillMount() {
    ReactModal.setAppElement("body");
  }

  handleShowVoucher(voucherNumber) {
    this.setState({
      showVoucher: true,
      voucher: this.state.vouchers[voucherNumber]
    });
  }
  componentDidUpdate() {}

  render() {
    return (
      <section className="hero is-fullheight is-bold">
        <div className="hero-body voucher">
          {this.state.showVoucher === true ? (
            <div className="container has-text-centered">
              <a
                onClick={this.handleOpenModal}
                className="button is-large is-rounded pulse center voucher-btn" 
              >
                Get mega voucher
              </a>
              <div id="offerVoucher" />
            </div>
          ) : (
            <div className="container has-text-centered">
              <a
                id="noVoucher"
                href="http://iron.test/"
                className="button is-large is-rounded center"
              >
                No voucher at the moment
              </a>
              <div id="offerVoucher" />
            </div>
          )}
        </div>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Voucher for mega maté"
          onRequestClose={this.handleCloseModal}
          className="Modal"
        >
          <div className="modal-content">
            <h1
              className="title has-text-centered animate-fallIn"
              id="voucherTitle"
            >
              {this.state.voucher.title}
            </h1>
            <h2
              className="subtitle has-text-centered animate-fallIn"
              id="voucherSubtitle"
            >
              {this.state.voucher.subtitle}
            </h2>
            <p className="has-text-centered animate-fallIn voucherText">
              {this.state.voucher.content}
            </p>
            <p className="has-text-centered animate-fallIn voucherStartTime">
              {this.state.voucher.startTime}
            </p>
            <p className="has-text-centered animate-fallIn voucherEndTime">
              {this.state.voucher.endTime}
            </p>
            <div className="buttons has-addons is-right">
              <button onClick={this.handleCloseModal} className="modalButton">
                Close
              </button>
            </div>
          </div>
        </ReactModal>

        <div className="level-right voucher">
          <a
            className="button homepage-btn"
            href="http://localhost:8000"
          >
            Go to homepage
          </a>
        </div>
      </section>
    );
  }

  checkAllVouchers() {
    for (var i = 0; i < this.state.vouchers.length; i++) {
      this.checkIfVoucherIsValid(
        this.state.vouchers[i].date,
        this.state.vouchers[i].startTime,
        this.state.vouchers[i].endTime,
        i
      );
      if (this.state.showVoucher == true) {
        break;
      }
    }
  }

  checkIfVoucherIsValid(voucherDate, startTime, endTime, voucherNumber) {
    var inputDate = new Date(voucherDate);
    var todaysDate = new Date();
    var todaysTime = new Date().toLocaleTimeString();
    if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
      if (startTime < todaysTime) {
        if (endTime > todaysTime) {
          this.handleShowVoucher(voucherNumber);
        }
      }
    }
  }
}

export default Voucher;

if (document.getElementById("voucher")) {
  ReactDOM.render(<Voucher />, document.getElementById("voucher"));
}
