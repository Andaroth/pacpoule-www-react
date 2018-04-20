import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <nav id="top" className="mb20">
                <div className="nav-wrapper container">
                    <a href="./" className="brand-logo">PacPoule</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="./play">Jouer</a></li>
                        <li><a href="./casestudy">Case Study</a></li>
                    </ul>
                </div>
            </nav>
        ) // return 
    } // render
} //class