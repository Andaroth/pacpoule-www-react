import React, { Component } from 'react';

// pictures
import Soft01 from '../../assets/img/softview_01.png';

export default class Casestudy extends Component {
    render() {
        return(
            <div id="case-study" className="container">
                <div className="row white myCadre p10">
                    <h1 className="center-align">Comment et pourquoi j'ai créé Pac Poule</h1>
                    <div className="col s12 m6">
                        <h2 className="center-align">Le but</h2>
                        <p>
                            J'avais envie de créer un jeu Pac-Man sans prise de tête pour montrer ce que je et on pouvait faire avec quelques connaissances de code et la maîtrise d'un éditeur tel que RPG Maker. <br/>
                            Grâce à mes nombreuses heures passées sur RPG Maker quand j'étais plus jeune, j'ai designé le jeu du mieux que je pouvais.
                        </p>
                        <p>
                            Je ne voulais pas me satisfaire de juste utiliser le pseudo-code par défaut de l'éditeur, j'avais également envie de m'impliquer dans les sources du projet. <br/>C'est pourquoi j'ai réalisé l'écran du tableau des scores en JavaScript. 
                        </p>
                    </div>
                    <div className="col s12 m6">
                        <h2 className="center-align">Le cadre</h2>
                        <p>
                            J'ai travaillé deux semaines sur la réalisation du projet. J'étais à BeCode durant toute cette période.
                        </p>
                        <p>
                            La première semaine m'a permi de designer les niveaux du jeu et de trouver quelques scripts intéressants en ligne pour améliorer le gameplay. <br/>
                            Durant la seconde semaine, j'ai eu besoin d'entrer dans le code source du projet pour créer mon propre système de scores. 
                        </p>
                    </div>
                    <div className="col s12">
                        <h2 className="center-align">Le commencement</h2>
                        <p>
                            Une fois le dossier du projet et ses sources de bases générées automatiquement par RPG Maker, la première étape du travail fût de configurer le projet de sorte à l'optimiser pour un jeu Pac-Man. <br/>
                            En effet, par défaut l'éditeur utilisé est orienté pour créer des RPG. La raison pour laquelle j'ai opté pour RPG Maker est que certaines fonctionnalités, comme les cartes, l'écran-titre, les déplacements des personnages, etc... sont déjà prises en charge par défaut et qu'ainsi je n'avais pas besoin de les réécrire moi-même. 
                        </p>
                        <div className="row">
                            <div className="col s12 m6">
                                <p>
                                    Une des plus grosses partie du travail fût de créer des événements communs, qui sont un peu comme les <em>fonctions()</em> que l'on peut rappeler dans du vrai code. <br/>
                                    Tous ces événements ainsi que les ennemis se programme de manière visuelle avec du pseudo-code, les deux semaines m'ont été nécessaires pour aggrémenter les différents niveaux d'ennemis et flammes, rappelant respectivement leur propres événements communs. 
                                </p>
                                <p>
                                    La partie la plus chouette à pratiquer est le level-design qui consiste principalement à dessiner les cartes des niveaux à l'aide des tilesets fournis dans RPG Maker. <br/>
                                    J'adore cette étape car elle est très créative, c'est comme du dessin : poser des arbres ici, mettre une montagne là, rajouter des murs par-là, etc... 
                                </p>
                            </div>
                            <div className="col s12 m6">
                                <img className="minimg" src={Soft01} alt="Image de l'éditeur de niveaux de RPG Maker MV"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <h2 className="center-align">Le level design</h2>
                        <p>
                            La première chose que l'on doit faire quand on commence un projet RPG Maker, c'est de
                        </p>
                    </div>
                </div>
            </div>
        ) // return
    } // render end
} // class