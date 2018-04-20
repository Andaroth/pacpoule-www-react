import React, { Component } from 'react';

// picture
import Banner from '../../assets/img/banner.png';
import Map01 from '../../assets/img/gameview_05.jpg';
import Map02 from '../../assets/img/gameview_13.jpg';
import Score from '../../assets/img/gameview_11.jpg';

export default class Home extends Component {
    render() {
        return(
            <div id="home" className="container">
                <div className="row white myCadre p10">
                    <h1 className="center-align"><img src={Banner} alt="Pac Poule, le jeu" /></h1>
                    <div className="row center-align">
                        <a href="./play" className="btn red darken-2">Jouer au jeu <i class="large material-icons right">games</i></a>
                    </div>
                    <div className="col s12">
                        <h2 className="center-align">Le projet</h2>
                        <h5 className="mxw50 m25 p10 myCenter center-align">
                            Pac Poule est un jeu vidéo largement inspiré de Pac-Man avec en plus la possibilité de sauter au dessus de certains murs dans le jeu. 
                        </h5>
                        <p className="p10 myCenter">    
                            Le but du jeu est d'attraper des flammes tout en évitant les ennemis à travers plusieurs niveaux qui consistent en des labyrinthes. 
                        </p>
                        <p className="p10 myCenter">
                            Le projet a été développé sur RPG Maker MV. L'éxécutable du jeu tourne en JavaScript avec à la libraire Pixi.js.
                        </p>
                        <div className="row center-align mb20">
                            <a href="#infos" className="btn cyan">En savoir plus</a>
                        </div>
                        <div className="row p10">
                            <div className="col s12 m6">
                                <img src={Map01} alt="Image du jeu Pac Poule" />
                            </div>
                            <div className="col s12 m6">
                                <img src={Map02} alt="Image de l'écran-titre du jeu Pac Poule" />
                            </div>
                        </div>
                    </div>
                    <div id="infos" className="col s12 m6 scrollspy">
                        <h2 className="center-align">L'auteur</h2>
                        <p>
                            Je m'appelle <a href="https://axelfiolle.be/">Axel Fiolle</a> et j'ai créé ce jeu. Codeur, graphiste et amateur level-designer, j'aime croiser mes différentes compétences pour réaliser des choses bluffantes. 
                        </p>
                    </div>
                    <div className="col s12 m6">
                        <h2 className="center-align">Le cours</h2>
                        <p>
                            Le projet a été développé en deux semaines durant la formation de 6 mois <a href="https://becode.org">BeCode</a>. Le cadre du projet était la manipulation de JS pour créer un tableau des scores à l'aide des librairies imposées par le logiciel RPG Maker. 
                        </p>
                    </div>
                    <div className="col s12 center-align mb20">
                        <a href="./casestudy" className="btn cyan">Le case-study <i className="material-icons left">change_history</i></a>
                    </div>
                    <div className="col s12">
                        <h4>Crédits &amp; ressources</h4>
                        <p>
                            Les images du jeu (tilesets, personnages) sont comprises dans le pack de ressources par défaut de RPG Maker MV.
                        </p>
                        <p>
                            L'écran du tableau des scores a été entièrement écrit par moi-même. J'ai également réalisé la bannière de l'écran-titre. 
                        </p>
                        <p>
                            Les autres scripts additionnels ont été créés par GaLV, Orange et SRD.
                        </p>
                        <div className="center-align">
                            <img className="minimg" src={Score} alt="Tableau des scores du jeu PacPoule"/>
                        </div>
                    </div>
                </div>
            </div>
        ) // return
    } // render end
} // class