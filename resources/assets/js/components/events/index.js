import React, { Component } from "react";
import ReactDOM from "react-dom";
import { debug } from "util";
//import "../styles/styles.css";
import "./styles.css";

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEventsList: false,
      events: []
    }
    this.toggleShowEventsListClick = this.toggleShowEventsListClick.bind(this);
  }
  componentDidMount() {
    const now = this;
    fetch("/api/event")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ events: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  toggleShowEventsListClick() {
		this.setState({showEventsList: !this.state.showEventsList});
	}
	


  render() {
    return (
      <div className="events">
        <div className="bg-image" />                    
            <div className="columns">
              <div className="column is-half" id="eventsHeading">
                <h1 className="title is-1 events-title">Mega Events</h1>
                <h2 className="title is-3 events-subtitle">Upcoming</h2>
              </div>
            </div>
       
        <div className="column">
        {this.state.events && this.state.events.length > 0
          ? this.state.events.map((keyName, keyIndex) => {
              return (
                <div
                  className="container block events-placeholder"
                  key={`${keyName.id}`}
                >
                  <h4 className="title is-4 events-name">
                    {keyName.date} / {keyName.eventName} / {keyName.city}
  
                  </h4>

                  <button className="toggle-events-btn"
                  onClick={this.toggleShowEventsListClick}
                  >
                  {(this.state.showEventsList &&
                    "x"	) || "Read More"	
                  }</button>
                  <div>
                  

                  {this.state.showEventsList &&
                      <ul> 
                      <li className="events-p">{keyName.eventInfo}</li>
                      <a
                      className="button"
                      id="events-button"
                      href={keyName.facebookUrl}
                    >
                      Join the party!
                    </a>
                      </ul>
                    }

                    </div>

                </div>
              );
            })
          : ""}
          </div>
      </div>

    );
  }
}

export default Events;
