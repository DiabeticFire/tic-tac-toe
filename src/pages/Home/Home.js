import React, { Component } from 'react';

//import components
import MenueBar from '../../components/MenueBar/MenueBar.js';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <MenueBar />
        <a href="/game/easy">Easy</a>
        <a href="/game/medium">Medium</a>
        <a href="/game/hard">Hard</a>
        <a href="/game">Leaderboard</a>
      </div>
    );
  }
}

export default Home;
