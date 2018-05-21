import React, { Component } from "react";
import ReactDOM from "react-dom";
import { debug } from "util";
import "./styles.css";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEventDetail: false
    };

    this.toggleshowEventDetailClick = this.toggleshowEventDetailClick.bind(
      this
    );
  }

  toggleshowEventDetailClick() {
    this.setState({ showEventDetail: !this.state.showEventDetail });
  }

  render() {
    return (
      <div className="block events-placeholder">
        <h4 className="title is-4 events-name">
          {this.props.eventData.date} / {this.props.eventData.eventName} /{" "}
          {this.props.eventData.city}
        </h4>

        <div id="btn">
          {!this.state.showEventDetail && (
            <button
              className="toggle-events-btn"
              onClick={this.toggleshowEventDetailClick}
            >
              Read More
            </button>
          )}

          {this.state.showEventDetail && (
            <div>
              <p className="events-p">{this.props.eventData.eventInfo}</p>
              {this.props.eventData.facebookUrl != null ? (
                <a
                  className="button"
                  id="events-button"
                  href={this.props.eventData.facebookUrl}
                >
                  Join the party!
                </a>
              ) : (
                ""
              )}
              <button
                className="toggle-events-btn"
                onClick={this.toggleshowEventDetailClick}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Event;
