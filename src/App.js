import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
//elem
import Navbar from './compos/elem/navbar';
import Footer from './compos/elem/footer';
// pages
import NotFound from './compos/pages/404';
import Home from './compos/pages/home';
import Game from './compos/pages/game';
import Casestudy from './compos/pages/casestudy';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/play" component={Game} />
              <Route path="/casestudy" component={Casestudy} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    );
  } // render end
} // class
