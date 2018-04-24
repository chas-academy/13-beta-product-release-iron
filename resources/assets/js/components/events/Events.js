import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import eventsBackground from '../images/eventsBackground.jpg';
import '../styles/styles.css';

 class Events extends Component {
    render() {
        return (
            <div className="events">
                <div className="bg-image"></div>
                { <div className="backgroundOverlay"></div> }
                <div className="megaTitle block">
                    <h2 className="title is-1">MEGA EVENTS</h2>
                    <h2 className="title is-4">UPCOMING</h2>
                </div>
                <div className="container block">
                    <h3 className="title">5 MAY / MÖLLAN FESTIVAL / MALMÖ</h3>
                    <p className="content">Mitt Möllan is aa transforming place. It was once a shopping mall Galleria Leonard, a date and dark shopping mall from the 1960's with a few tenants.<br/> Now transformed into a bustling hub and meeting place for the citys's creatives. Mitt Möllan is inspired by the real people and culture of Malmö, which is curious, vibrant and diverse.</p>
                    <button className="button is-warning">Join the party!</button>
                </div>
                <div className="container block">
                    <h3 className="title">14 JUNE / MEGA PARTY / STOCKHOLM</h3>
                </div>
                <div className="container block">
                    <h3 className="title">23 JULY / TRÄDGÅRDEN / STOCKHOLM</h3>
                </div>
                <div className="pastEvents">
                    <h2 className="title is-4">PAST EVENTS</h2>
                </div>  
            </div>
            
        );
    }
}
export default Events;

//TODO: This is an example