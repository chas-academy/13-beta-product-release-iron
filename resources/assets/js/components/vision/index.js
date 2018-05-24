import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


class Vision extends Component {
  constructor() {
    super();
    this.state = {
      vision: []
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

  }

  render() {
    return (
      <div id="vision" className="vision">
        <div id="vision-columns" className="columns">
          <div className="column">
            <h1 className="title is-1 vision-title">
              {this.state.vision.title}
            </h1>
            <h2 className="title is-3 vision-subtitle">
              {this.state.vision.subtitle}
            </h2>
            <p className="vision-paragraph">
              {this.state.vision.content}
            </p>
          </div>
          <div id="vision-img-column" className="column fadeinRight">
            <figure className="image is-horizontal-center is-half">
              <img id="gubbe" src={this.state.vision.imageUrl} />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Vision;
