import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import megamate_gulsvart from '../images/megaMate_loggo.png';
import ReactPlayer from 'react-player'; 

class Header extends Component {
	render() {
		return (
			<div className="Header">
							<header className="App-header">
							
					<div className="Video">
					<video style={{ objectFit: 'cover', width: '100%', height: '100%' }}		
									className="banner" src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4" autoPlay/>
								</div>
								
								<img src={megamate_gulsvart} className="megamate-logo navbar-brand is-mobile is-overlay" alt="logo" /> 
									
				<div className="navbar-menu is-overlay"> 
									<div className="navbar-end">
										<a href="#products" className="is-tab is-hidden-mobile is-active navbar-customize">Products</a>
										<a href="#events" className="is-tab is-hidden-mobile is-active navbar-customize">Events</a>
										<a href="#resellers" className="is-tab is-hidden-mobile is-active navbar-customize">Resellers</a>
										<a href="#footer" className="is-tab is-hidden-mobile is-active navbar-customize">Contact</a>

									</div>
								</div>
								
				<div className="navbar-brand is-overlay">
									<nav className="navbar is-overlay burger-customize" role="navigation" aria-label="main navigation">
										<a role="button" className="navbar-burger is-overlay" aria-label="menu" aria-expanded="false">
											<span aria-hidden="true"></span>
											<span aria-hidden="true"></span>
											<span aria-hidden="true"></span>
										</a>
									</nav>
								</div>
								
				</header>
			</div>
		);
	}
}
export default Header;

