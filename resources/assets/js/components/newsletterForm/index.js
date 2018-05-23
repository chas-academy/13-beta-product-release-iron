import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/styles.css";

class NewsletterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      message: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        email_address: this.state.email,
        status: "subscribed"
      })
    }) 
    .then((response) => response.json())
    .then((res) => {
      this.setState({
        message: res.message
      });
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  render() {
    return (
      <div className="container newsletter-container fadeinRight">
        <div className="content">
          <p className="footer-news">Sign up for our newsletter</p>
          <form
            className="newsletter-form"
            // action="/api/newsletter"
            // method="POST"
            >
            <div className="field has-addons">
              <div id="control-input" className="control">
                <input
                  id="input-field"
                  onChange={this.handleChange}
                  type="text"
                  value={this.state.email}
                  className="input"
                  placeholder="Enter your email"
                  required
                  /> <br />
                {this.state.message ? this.state.message : ''}
              </div>
              <div id="control-input" className="control">
                <button onClick={this.handleSubmit} id="news-button" type="submit">
                  Send
                </button> <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewsletterForm;
