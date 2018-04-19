import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <footer id="footer" className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">PacPoule par Andaroth</h5>
                            <p className="grey-text text-lighten-4">Merci de votre visite, j'espère que vous vous amusez bien !</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Liens intéressants</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://becentral.be/">BeCentral, coeur digital de Bruxelles</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://becode.org/">BeCode.Org, formations web gratuites</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        &copy; 2018 to now, PacPoule par <a href="https://axelfiolle.be/">Axel Fiolle</a>
                        <a className="grey-text text-lighten-4 right" href="https://axelfiolle.be/shop">Acheter des goodies</a>
                    </div>
                </div>
            </footer>
        ) // return 
    } // render
} //class