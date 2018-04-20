import React, { Component } from 'react';

import PicOne from '../../assets/img/gameview_04.png';

export default class NotFound extends Component {
    render() {
        return(
            <div className="row white container myCadre p10 center-align">
                <h1>Pac Poule, le jeu qui rend fou</h1>
                <p>
                    Alors, vous êtes devenu fou ? Vous venez sur les pages d'erreur comme ça, quel courage !
                </p>
                <div className="row">
                    <div className="col s12 m6">
                        <a href="./play" className="btn red darken-2">Jouer à pacpoule</a>
                    </div>
                    <div className="col s12 m6">
                        <a href="./casestudy" className="btn cyan">Case-study du projet</a>
                    </div>
                </div>
                <div className="col s12 center-align mb20">
                    <img className="minimg" src={PicOne} alt="Image du jeu PacPoule"/>
                </div>
                <div className="col s12 center-align">
                    <a href="./" className="btn cyan">Page d'acceuil</a>
                </div>
            </div>
        ) // return
    } // render end
} // class