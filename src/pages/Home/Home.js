import React, { Component } from "react";

//import components
import MenueBar from "../../components/MenueBar/MenueBar.js";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <MenueBar />
        <a href="/game">Easy</a>
        <a href="/game">Medium</a>
        <a href="/game">Hard</a>
        <a href="/game">Leaderboard</a>
      </div>
    );
  }
}

export default Home;
