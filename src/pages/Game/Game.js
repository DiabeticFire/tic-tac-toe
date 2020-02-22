import React, { Component } from "react";

//import components
import MenueBar from "../../components/MenueBar/MenueBar.js";
import Cell from "../../components/Cell/Cell.js";

//import css
import "./Game.css";

//import scripts
import randBoolean from "./scripts/randBoolean.js";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      activePlayer: null,
      grid: {
        cell_1: null,
        cell_2: null,
        cell_3: null,
        cell_4: null,
        cell_5: null,
        cell_6: null,
        cell_7: null,
        cell_8: null,
        cell_9: null
      }
    };
  }

  componentDidMount() {
    this.setState({ activePlayer: randBoolean() ? "human" : "ai" }, () => console.log(this.state.activePlayer));
  }

  cellClicked(cellID) {
    console.log("cellClicked");

    if (this.state.activePlayer !== "human") {
      alert("please wait your turn");
    } else {
      let state = {};
      state[this.state.grid[cellID]] = "human";
      this.setState(state, () => console.log(this.state.grid));
    }
  }

  render() {
    return (
      <div className="game">
        <MenueBar />
        <div className="grid">
          <Cell id="1" onClick={() => this.cellClicked("cell_1")} />
          <Cell id="2" onClick={() => this.cellClicked("cell_2")} />
          <Cell id="3" onClick={() => this.cellClicked("cell_3")} />
          <Cell id="4" onClick={() => this.cellClicked("cell_4")} />
          <Cell id="5" onClick={() => this.cellClicked("cell_5")} />
          <Cell id="6" onClick={() => this.cellClicked("cell_6")} />
          <Cell id="7" onClick={() => this.cellClicked("cell_7")} />
          <Cell id="8" onClick={() => this.cellClicked("cell_8")} />
          <Cell id="9" onClick={() => this.cellClicked("cell_9")} />
        </div>
      </div>
    );
  }
}

export default Game;
