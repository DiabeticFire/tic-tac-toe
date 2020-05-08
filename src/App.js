import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import pages
import Home from './pages/Home/Home.js';
import Game from './pages/Game/Game.js';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: '#03191E',
          height: 100 + 'vh',
          width: 100 + 'vw',
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
