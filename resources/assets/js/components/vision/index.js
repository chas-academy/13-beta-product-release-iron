import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/styles.css";
import "./styles.css";

class Vision extends Component {
  constructor() {
    super();
    this.state = {
      vision: [],
      banner: ""
    };
  }
  componentDidMount() {
    const now = this;
    fetch("/api/vision")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ vision: data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });

    fetch("/api/banner")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ banner: data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="vision">
        <div className="columns">
          <div className="column is-half">
            <h1 className="title is-1 vision-title">
              {this.state.vision.title}
            </h1>
            <h2 className="title is-3 vision-subtitle">
              {this.state.vision.subtitle}
            </h2>
            <p className="vision-paragraph">{this.state.vision.content}</p>
          </div>
          <div className="coloumn is-half">
            <figure className="image is-horizontal-center">
              <img id="gubbe" src={this.state.vision.imageUrl} />
            </figure>
          </div>
        </div>

        {/* 
        <section className="containter">
          <figure className="image">
            {<img id="megaMateFlagga" src={this.state.banner.imageUrl} />}
          </figure>
        </section>
    */}
      </div>
    );
  }
}

export default Vision;
