import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/styles.css';
import { debug } from 'util';

 class Events extends Component {
	 constructor(){
		 super();
		 this.state = {
			 test: '',
			 done: false,		
		 };
		}
		componentDidMount() {
			const now = this;
		 fetch('/api/resellercity')
		 .then(function(response) {
			 return response.json();
		 })
		 .then(function(data) {
			 console.log(data);
			 now.setState({test: data[0].name, done: true});
		 });
			//  .then(res => res.json())
			//  .then(data => this.setState({test: data, done: true}));
		}
		
    render() {
			// const { test } = this.state.test;
        return (
					<div> <h1>Hi there doggy</h1>
						<h2>{this.state.test}</h2>
						{/* {this.state.done.done === true ? 
							(this.state.test.map((item) => 
						 <li>{item}</li>)) : ('') } */}
					</div>
					//  <div className="events" id="events">

					//  	<div className="bg-image"></div>
					//  		{ <div className="backgroundOverlay"></div> }

					//  	<div className="megaTitle block">
					//  		<h1 className="title is-1 events-title">Mega Events</h1>
					//  		<h2 className="title is-3 events-subtitle">Upcoming</h2>
					//  	</div>

					//  	<div className="container Block events-placeholder">
					//  		<h4 className="title is-4 events-name">5 Maj / Möllan Festival / Malmö</h4>
					//  		<p className="events-p">Mitt Möllan is aa transforming place. It was once a shopping mall Galleria Leonard, a date and dark shopping mall from the 1960's with a few tenants.<br/> Now transformed into a bustling hub and meeting place for the citys's creatives. Mitt Möllan is inspired by the real people and culture of Malmö, which is curious, vibrant and diverse.</p>
					//  		<button className="button" id="events-button">Join the party!</button>
					//  	</div>

					//  	<div className="container Block events-placeholder">
					//  		<h4 className="title is-4 events-name">14 June / Mega Party / Stockholm</h4>
					//  	</div>

					//  	<div className="container Block events-placeholder">
					//  		<h4 className="title is-4 events-name">23 July / Trädgården / Stockholm</h4>
					//  	</div>

					//  	<div className="pastEvents">
					//  		<h2 className="title is-3 past-events-title">Past events</h2>
					//  	</div>

					//  </div>
        );
    }
}

export default Events;