import React, { Component } from "react";
import ReactDOM from "react-dom";
import { debug } from "util";
//import "../styles/styles.css";
import "./styles.css";

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEventDetail: false

    }
    this.toggleshowEventDetailClick = this.toggleshowEventDetailClick.bind(this);
  }

  toggleshowEventDetailClick() {
		this.setState({showEventDetail: !this.state.showEventDetail});
	}
	


  render() {
    return (
              <div
                className="container block events-placeholder"
                /*key={`${props.eventData.id}`} */
              >
                <h4 className="title is-4 events-name">
                  {this.props.eventData.date} / {this.props.eventData.eventName} / {this.props.eventData.city}

                </h4>


                { !this.state.showEventDetail &&
                <button className="toggle-events-btn" id="btn"
                onClick={this.toggleshowEventDetailClick}
                >
                  Read More	
                </button>}
            

                {this.state.showEventDetail &&
                    <ul> 
                    <li className="events-p">{this.props.eventData.eventInfo}</li>
                    {this.props.eventData.facebookUrl != null ?
                      (<a
                      className="button"
                      id="events-button"
                      href={this.props.eventData.facebookUrl}
                    >
                      Join the party!
                    </a>)
                      : ""}
                    <button className="toggle-events-btn" id="btn"
                    onClick={this.toggleshowEventDetailClick}
                    >
                      -	
                    </button>
                    </ul>
                  }
                </div>
    );
  }
}

export default Event;
