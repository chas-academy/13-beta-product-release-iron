import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';
import ImgGubbe from '../images/megaMate_gubbe.png';
import MegaMateFlagga from '../images/megaMate_flagga.png';

class Vision extends Component {
  render() {
    return (
      <div className="vision">
        <div className="columns">
          <div className="column is-half">
            <h1 className="title is-1 vision-title">Mega Vision</h1>
            <h2 className="title is-3 vision-subtitle">
              Mega Matè was created from our love of dance, Africa and the club
              scene.
            </h2>
            <p className="vision-paragraph">
              After over 20 years of working in restaurants and clubs, our
              frustration, that there was no energy generating, refreshing and
              tasty alcohol-free beverage specifically made for the dance floor
              got too much. We knew that the base for our drink would be tea,
              the spice ginger and the bottle a tribute to Africa where the
              founder’s wife has her roots. Mega Mate was born and we headed off
              to the dance floors, festivals and clubs.
            </p>
          </div>
          <div className="coloumn is-half">
            <figure className="image is-horizontal-center">
              <img id="gubbe" src={ImgGubbe} />
            </figure>
          </div>
        </div>

        <section className="containter">
          <figure className="image">
            {<img id="megaMateFlagga" src={MegaMateFlagga} /> }
          </figure>
        </section>

      </div>
    );
  }
}
export default Vision;
