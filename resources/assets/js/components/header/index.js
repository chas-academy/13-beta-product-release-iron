import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "../styles/styles.css";
import "./header.css";
import megamate_gulsvart from "../images/megaMate_loggo.png";
import ReactPlayer from "react-player";
import { slide as Menu } from "react-burger-menu";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      header: "",
      menuOpen: false
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  componentDidMount() {
    const now = this;
    fetch("/api/header")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ header: data[0].videoUrl });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <header>
        <Menu id="burger-menu" right isOpen={this.state.menuOpen}>
          <a
            onClick={() => this.closeMenu()}
            className="menu-item"
            href="#products"
          >
            Products
          </a>
          <a
            onClick={() => this.closeMenu()}
            className="menu-item"
            href="#events"
          >
            Events
          </a>
          <a
            onClick={() => this.closeMenu()}
            className="menu-item"
            href="#resellers"
          >
            Resellers
          </a>
          <a
            onClick={() => this.closeMenu()}
            className="menu-item"
            href="#contact"
          >
            Contact
          </a>

          </Menu>
        <div className="Video">
          <ReactPlayer
            playing
            loop="true"
            width="100%"
            height="100%"
            style={{
              position: "inherit",
              minWidth: "100%",
              overflow: "hidden",
              zIndex: -1
            }}
            url={[
              { src: "/images/header-video.mp4", type: "video/mp4" },
              { src: "/images/header-video.ogg", type: "video/ogg" },
              { src: "/images/header-video.webm", type: "video/webm" }
            ]}
          />
        </div>
        <img
          src={megamate_gulsvart}
          className="megamate-logo navbar-brand is-mobile is-overlay"
          alt="logo"
        />
      </header>
    );
  }
}

export default Header;
