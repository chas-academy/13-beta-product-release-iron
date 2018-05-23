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
            <h1 className="title is-1 vision-title fadeIn">
              {this.state.vision.title} MEGA VISION
            </h1>
            <h2 className="title is-3 vision-subtitle fadeinLeft">
              {this.state.vision.subtitle} Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris bibendum elementum egestas. In
              in rhoncus tortor. Nunc eget fringilla augue. Integer vitae
              efficitur lacus.
            </h2>
            <p className="vision-paragraph fadeinLeft">
              {this.state.vision.content} Aenean in massa velit. Phasellus risus
              sapien, luctus nec elit at, consequat luctus urna. Proin ac
              suscipit risus, vitae convallis eros. Aenean orci nunc, accumsan
              eu lectus in, malesuada venenatis nibh. Ut varius augue non nulla
              blandit dapibus. Cras viverra bibendum libero, et euismod est
              posuere id. Fusce id augue nec justo varius imperdiet id luctus
              ex. Etiam vehicula interdum porttitor. Curabitur at diam
              scelerisque mi ullamcorper sagittis.
            </p>
          </div>
          <div id="vision-img-column" className="column">
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
