import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "../styles/styles.css";
import "./styles.css";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      banner: ""
    };
  }
  componentDidMount() {
    const now = this;
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
      <div>
        {
          <section className="containter">
            <figure className="image">
              {<img id="imgBanner" src={this.state.banner.imageUrl} />}
            </figure>
          </section>
        }
      </div>
    );
  }
}

export default Banner;
