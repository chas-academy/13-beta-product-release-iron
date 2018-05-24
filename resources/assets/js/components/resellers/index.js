import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../styles/styles.css";
import "./styles.css";

class Resellers extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      reseller: []
    };
  }

  componentDidMount() {
    const now = this;
    fetch("/api/resellercity")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        now.setState({ cities: data });
      })
      .catch(function(error) {
        console.log(error);
      });

    fetch("/api/reseller")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        now.setState({ reseller: data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  compareId(cityId, resellerCityId) {
    if (cityId === resellerCityId) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="resellers" id="resellers">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1 resellers-title">Drink Us</h1>
            <div className="city-div">
              {this.state.cities.map((val, i) => {
                return (
                  <div className="city-name">
                    <h2 className="title is-3 resellers-subtitle" key={i}>
                      {val.cityName}
                    </h2>
                    <div>
                      {this.state.reseller.map((value, index) => {
                        return (
                          this.compareId(val.id, value.cityId) == true && (
                            <div className="locationName" key={index}>
                              {value.name}
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="button buyOnline">
              <a
                id="buyOnline-btn"
                href="https://www.mat.se/butik/loui-jama-mega-mate-soda-factory-sthlm-33cl"
                target="_blank"
              >
                Buy Online
              </a>
            </button>
          </div>
        </div>
        <div>
          <section className="map">
            <iframe src="https://www.google.com/maps/d/embed?mid=1Ibi8rJsvNJIkSezD36a1_AY__umOXe_1" />
          </section>
        </div>
      </div>
    );
  }
}

export default Resellers;
