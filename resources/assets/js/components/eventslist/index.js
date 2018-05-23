import React, { Component } from "react";
import ReactDOM from "react-dom";
import { debug } from "util";
import Event from "../event";
import "./styles.css";

class EventsList extends Component {

  constructor() {
    super();
    this.state = {
      events: []
    }
  }
  componentDidMount() {
    const now = this;
    fetch("/api/event")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        now.setState({ events: data });
        now.orderEventDate();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="events" id="events">
        <div className="bg-image" />   
            <div className="">                 
            <div className="">
              <div className="" id="eventsHeading">
                <h1 className="title is-1 events-title">Mega Events</h1>
                <h2 className="title is-3 events-subtitle">Upcoming</h2>
              </div>
            </div>
       
        <div className="">
        {this.state.events && this.state.events.length > 0
          ? this.state.events.map((keyName, keyIndex) => {
              if(this.checkIfEventDatePassed(keyName))
                return <Event key={keyName.id} eventData={keyName}/>;
            })
          : <h3 className="no-event">No event uppcomming event at the moment</h3>}
          </div>
          </div>
      </div>

    );
  }
  checkIfEventDatePassed(event) {
    var eventDate = new Date(event.date);
    var todaysDate = new Date();
    if(eventDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)){
      return true;
    } else {
      return false;
    }
  }
  orderEventDate() {
    const orderedEvents = [].concat(this.state.events)
    .sort((a, b) => a.date > b.date);
    this.setState({
      events: orderedEvents
    })
  }
}

export default EventsList;
