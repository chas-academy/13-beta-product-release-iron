import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';

class Resellers extends Component {
	render() {
		return (
			<div className="resellers" id="resellers">
				<div className="columns">
					<div className="column is-half">
						<h1 className="title is-1 vision-title">Resellers</h1>
						<h2 className="title is-3 vision-subtitle">Stockholm</h2>            
							<ul>
								<li className="locationName">Klara Strand Café</li>
								<li className="locationName">ICA kvantum, Liljeholmen</li>
								<li className="locationName">Folk & Friends</li>
								<li className="locationName">Trädgården/Huset under bron</li>
								<li className="locationName">Mikkeller Baren</li>
								<li className="locationName">Brill (Bondeg)</li>
								<li className="locationName">Dice Café</li>
								<li className="locationName">Studentkåren DISK, Kista</li>
								<li className="locationName">Kitchen & Table, Norrtull</li>
							</ul>
						<h2 className="title is-3 vision-subtitle">Malmö</h2>            
							<ul>
								<li className="locationName">Far I Hatten</li>
								<li className="locationName">ICA Supermarket, Möllan</li>
								<li className="locationName">Nya Tröls Bar & Restaurang</li>
								<li className="locationName">Grand Hatt Öl & Mat</li>
							</ul>
						<h2 className="title is-3 vision-subtitle">Uppsala</h2>            
							<ul>
								<li className="locationName">Taps Beer Bar</li>
								<li className="locationName">
									Uppsala Teknolog- och Naturvetarkår
								</li>
								<li className="locationName">ICA Supermarket</li>
							</ul>
						<h2 className="title is-3 vision-subtitle">Övriga platser</h2>            
							<ul>
								<li className="locationName">ICA Supermarket Ålidhem, Umeå</li>
								<li className="locationName">Ekolsunds Slott</li>
								<li className="locationName">Vita Saluhalv, Nässjö</li>
								<li className="locationName">Chapter House, Växjö</li>
								<li className="locationName">Hallen Kött & Delikatesser, Helsingborg</li>
								<li className="locationName">Jernbruket, Floda</li>
								<li>
									<a href="suEOdc">Link</a>
								</li>
							</ul>
					</div>
				</div>
					<div>
						<section className="map">
							<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1H_1me5Q-O9JUNyENiVQ9Y44UnqMVV8kd" />
						</section>
					</div>
			</div>
		);
	}
}

export default Resellers;
