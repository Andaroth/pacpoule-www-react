import React, { Component } from 'react';

// pictures
// import Map01 from '../../assets/img/gameview_05.jpg';
var gameAddr = "http://localhost:3000/gamejs/index.html";

export default class Game extends Component {
    render() {
        return(
            <div id="game" className="container">
                <div className="row white myCadre p10">
                    <h1 className="center-align">Jouer à Pac Poule</h1>
                    <div className="p10 center-align">
                        <small className="nomobile">Cliquez dans la zone de jeu pour activer les contrôles</small>
                        <div><iframe id="game-frame" className="nomobile" src={gameAddr} frameborder="0" width="100%" height="630"></iframe></div>
                        <p className="mobonly red-text">Momentanément indisponible sur mobile</p>
                        <small className="nomobile"><a href={gameAddr}>Voir en plein écran</a></small>
                    </div>
                    <div className="col s12 center-align">
                        <a href="./casestudy" className="btn cyan">Le making-of <i className="material-icons right">change_history</i></a>
                    </div>
                    <div className="col s12 m6">
                        <h2 className="center-align">Règles du jeu :</h2>
                        <ol className="p10">
                            <li>Attraper suffisamment de flammes pour obtenir des points et passer au niveau suivant</li>
                            <li>Éviter les ennemis qui vous font perdre des points</li>
                            <li>Si vous n'avez pas assez de points et qu'il n'y a plus de flammes, vous êtes bloqué</li>
                        </ol>
                    </div>
                    <div className="col s12 m6">
                        <h2 className="center-align">Comment jouer :</h2>
                        <ul className="force-ol p10">
                            <li>Utilisez les flèches du clavier pour vous déplacer</li>
                            <li>Vous pouvez également cliquer sur un endroit du jeu pour vous y rendre</li>
                            <li>Espace ou Enter pour faire défiler le texte</li>
                            <li>Espace ou C sur la carte pour sauter d'une case</li>
                        </ul>
                    </div>
                </div>
            </div>
        ) // return
    } // render end
} // class