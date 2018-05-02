import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/styles.css';

class Events extends Component {
	render() {
		return (
			<div className="events" id="events">

				<div className="bg-image"></div>
				{ <div className="backgroundOverlay"></div> }

				<div className="megaTitle block">
					<h1 className="title is-1 events-title">Mega Events</h1>
					<h2 className="title is-3 events-subtitle">Upcoming</h2>
				</div>

				<div className="container Block events-placeholder">
					<h4 className="title is-4 events-name">5 Maj / Möllan Festival / Malmö</h4>
				</div>

				<div className="container Block events-placeholder">
					<h4 className="title is-4 events-name">14 June / Mega Party / Stockholm</h4>
				</div>

				<div className="container Block events-placeholder">
					<h4 className="title is-4 events-name">23 July / Trädgården / Stockholm</h4>
				</div>

				<div className="pastEvents">
					<h2 className="title is-3 past-events-title">Past events</h2>
				</div>

			</div>
		);
	}
}

export default Events;