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

  componentDidMount = () => {
    this.setState({ activePlayer: randBoolean() ? "human" : "ai" }, () => console.log(this.state.activePlayer));

    // debuging
    // this.setState({ activePlayer: "human" }, () => {
    //   console.log("ready");
    //   console.log(this.state);
    // });
  };

  cellClicked = (cellID) => {
    if (this.state.activePlayer !== "human") {
      alert("please wait your turn");
    } else {
      let tempState = this.state;
      tempState.grid[cellID] = "human";
      tempState.activePlayer = "ai";
      this.setState(tempState, () => console.log(this.state.grid));
    }
  };

  render() {
    return (
      <div className="game">
        <MenueBar />
        <div className="grid">
          <Cell onPress={(e) => this.cellClicked("cell_1", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_2", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_3", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_4", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_5", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_6", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_7", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_8", e)} />
          <Cell onPress={(e) => this.cellClicked("cell_9", e)} />
        </div>
      </div>
    );
  }
}

export default Game;
