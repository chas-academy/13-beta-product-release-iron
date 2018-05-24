import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./header.css";
import megamate_gulsvart from "../images/MegaMate_loggo_color-01.png";
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
            Drink Us
          </a>
          <a
            onClick={() => this.closeMenu()}
            className="menu-item"
            href="#contact"
          >
            Contact
          </a>
        </Menu>
        <div className="video">
          {/*<ReactPlayer
            volume="0"
            muted="true"
            playing
            id="react-video-player"
            className="react-video"
            url={[
              { src: "/images/mega-film.mp4", type: "video/mp4" },
              { src: "/images/mega-film.ogg", type: "video/ogg" },
              { src: "/images/mega-film.webm", type: "video/webm" }
            ]}
          />*/}

          <video
            id="react-video-player"
            autoPlay
            muted
            controls
            controlsList="nodownload"
          >
            <source src="/images/mega-film.mp4" type="video/mp4" />
            <source src="/images/mega-film.ogg" type="video/ogg" />
            <source src="/images/mega-film.webm" type="video/webm" />
          </video>
          <audio autoPlay id="audiomf">
            <source src="/images/mega-ljud.mp3" type="audio/mpeg" />
          </audio>
          <a id="animated-arrow" href="#vision">
            <div className="arrow-container animated fadeInDown">
              <div className="arrow-2">
                <i className="fa fa-angle-down" />
              </div>
              <div className="arrow-1 animated hinge infinite zoomIn" />
            </div>
          </a>
        </div>
        <img
          src={megamate_gulsvart}
          className="megamate-logo navbar-brand is-mobile is-overlay fadeinLeft"
          alt="logo"
        />
      </header>
    );
  }
}

export default Header;
