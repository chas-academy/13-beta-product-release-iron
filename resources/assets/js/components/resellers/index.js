import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./resellers.css";

class Resellers extends Component {
  render() {
    return (
      <div>
        <section className="section find-us">
          <h1 className="find-us-title">FIND US</h1>
        </section>
        <section className="section resellers">
          <div className="container stockmalmo">
            <h2 className="cityName">Stockholm</h2>
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
            <h2 className="cityName">Malmö</h2>
            <ul>
              <li className="locationName">Far I Hatten</li>
              <li className="locationName">ICA Supermarket, Möllan</li>
              <li className="locationName">Nya Tröls Bar & Restaurang</li>
              <li className="locationName">Grand Hatt Öl & Mat</li>
            </ul>
          </div>
          <div className="container uppriga">
            <h2 className="cityName">Uppsala</h2>
            <ul>
              <li className="locationName">Taps Beer Bar</li>
              <li className="locationName">
                Uppsala Teknolog- och Naturvetarkår
              </li>
              <li className="locationName">ICA Supermarket</li>
            </ul>
            <h2 className="cityName">Övriga I Sverige</h2>
            <ul>
              <li className="locationName">ICA Supermarket Ålidhem, Umeå</li>
              <li className="locationName">Ekolsunds Slott</li>
              <li className="locationName">Vita Saluhalv, Nässjö</li>
              <li className="locationName">Chapter House, Växjö</li>
              <li className="locationName">
                Hallen Kött & Delikatesser, Helsingborg
              </li>
              <li className="locationName">Jernbruket, Floda</li>
              <li>
                <a href="suEOdc">Link</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1H_1me5Q-O9JUNyENiVQ9Y44UnqMVV8kd" />
        </section>
      </div>
    );
  }
}
export default Resellers;
