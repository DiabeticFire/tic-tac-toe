import React, { Component } from "react";

//import components
import MenueBar from "../../components/MenueBar/MenueBar.js";
import Board from "../../components/Board/Board.js";

//import css
import "./Game.css";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <MenueBar />
        <Board difficulty="3" />
      </div>
    );
  }
}

export default Game;
