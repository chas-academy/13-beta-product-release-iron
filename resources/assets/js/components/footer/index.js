import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/styles.css";
import "./styles.css";
import NewsletterForm from "../mailChimpNewsletterForm";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
  }

  render() {
    return (
      <div>
        <footer className="footer" id="contact">
          <div className="container footer-container">
            <div className="content">
              <p id="footer-title" className="footer-title">
                Contact Us
              </p>
              <p className="footer-p">info@mega-mate.com</p>
            </div>
            <div className="content">
              <a
                className="logo-link"
                href="https://www.facebook.com/megamate.sodafactory/"
                target="_blank"
              >
                <p className="footer-logo">Facebook</p>
              </a>
              <a
                className="logo-link"
                href="https://www.instagram.com/mega_mate/"
                target="_blank"
              >
                <p className="footer-logo">Instagram</p>
              </a>
              <a
                className="logo-link"
                href="https://www.sodafactory.se"
                target="_blank"
              >
                <p className="footer-logo">SodaFactory</p>
              </a>
            </div>
          </div>
          <NewsletterForm email={this.state.email} />
        </footer>
      </div>
    );
  }
}

export default Footer;
