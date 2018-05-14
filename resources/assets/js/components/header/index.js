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
      header: ""
    };
  }
  showSettings(event) {
    event.preventDefault();
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
        <Menu id="burger-menu" right>
          <a className="menu-item" href="#products">
            Products
          </a>
          <a className="menu-item" href="#events">
            Events
          </a>
          <a className="menu-item" href="#resellers">
            Resellers
          </a>
          <a className="menu-item" href="#contact">
            Contact
          </a>
          {/* <a onClick={ this.showSettings } className="menu-item--big" href="">Settings</a> */}
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

// class Header extends Component {
// 	showSettings (event) {
//     event.preventDefault();
//   }
// 		render() {
// 			return (
// 				<Menu width={ '20%' } right>
//         <a id="home" className="menu-item" href="/">Products</a>
//         <a id="about" className="menu-item" href="/about">Events</a>
//         <a id="contact" className="menu-item" href="/contact">Resellers</a>
//         {/* <a onClick={ this.showSettings } className="menu-item--big" href="">Settings</a> */}
// 				</Menu>

// 				// <div className="Header">
// 				// 	<header className="App-header">

// 						<div className="Video">
// 						<video style={{ objectFit: 'cover', width: '100%', height: '100%' }}
// 								className="banner" src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" autoPlay/>
// 						</div>

// 						<img src={megamate_gulsvart} className="megamate-logo navbar-brand is-mobile is-overlay" alt="logo" />

// 					{/* <div className="navbar-menu is-overlay">
// 										<div className="navbar-end">
// 											<a href="#products" className="is-tab is-hidden-mobile is-active navbar-customize">Products</a>
// 											<a href="#events" className="is-tab is-hidden-mobile is-active navbar-customize">Events</a>
// 											<a href="#resellers" className="is-tab is-hidden-mobile is-active navbar-customize">Resellers</a>
// 										</div>
// 									</div> */

// 					/* <div className="navbar-brand is-overlay">
// 										<nav className="navbar is-overlay burger-customize" role="navigation" aria-label="main navigation">
// 											<a role="button" className="navbar-burger is-overlay" aria-label="menu" aria-expanded="false">
// 												<span aria-hidden="true"></span>
// 												<span aria-hidden="true"></span>
// 												<span aria-hidden="true"></span>
// 											</a>
// 										</nav>
// 									</div> */}
// 				// 	 </header>
// 				// </div>
// 			);
// 		}
// 	}
export default Header;
