import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './vision.css';

 class Vision extends Component {
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="vision-title">Mega Vision</h1>
                        <h2 className="vision-subtitle">Mega Matè was created from our love of dance, Africa and the club scene.</h2>
                        <p className="vision-paragraph">After over 20 years of working in restaurants and clubs, 
                                                        our frustration, that there was no energy generating, 
                                                        refreshing and tasty alcohol-free beverage specifically 
                                                        made for the dance floor got too much. We knew that the 
                                                        base for our drink would be tea, the spice ginger and 
                                                        the bottle a tribute to Africa where the founder’s wife has her roots. 
                                                        Mega Mate was born and we headed off to the dance floors, festivals and clubs.</p>
                    </div>
                </div> 

                <div className="coloumns">
                    <div className="coloumn is-half">
                    <figure className="image">
                </figure>
                    </div>
                </div>

        

            </div>
        );
    }
}
export default Vision;
