import React, { Component } from "react";

//import components
import MenueBar from "../../components/MenueBar/MenueBar.js";
import Cell from "../../components/Cell/Cell.js";

//import css
import "./Game.css";

//import scripts
import randBoolean from "./scripts/randBoolean.js";

class Game extends Component {
  state = {
    activePlayer: "Test",
    grid: {
      cell_1: "",
      cell_2: "",
      cell_3: "",
      cell_4: "",
      cell_5: "",
      cell_6: "",
      cell_7: "",
      cell_8: "",
      cell_9: ""
    }
  };

  componentDidMount() {
    this.setState({ activePlayer: randBoolean() ? "human" : "ai" }, () => {});
  }

  render() {
    return (
      <div className="game">
        <MenueBar />
        <div className="grid">
          <Cell id="cell_1" onClick={this.handleAction(1)} />
          <Cell id="cell_2" onClick={this.handleAction(2)} />
          <Cell id="cell_3" onClick={this.handleAction(3)} />
          <Cell id="cell_4" onClick={this.handleAction(4)} />
          <Cell id="cell_5" onClick={this.handleAction(5)} />
          <Cell id="cell_6" onClick={this.handleAction(6)} />
          <Cell id="cell_7" onClick={this.handleAction(7)} />
          <Cell id="cell_8" onClick={this.handleAction(8)} />
          <Cell id="cell_9" onClick={this.handleAction(9)} />
        </div>
      </div>
    );
  }
}

export default Game;
