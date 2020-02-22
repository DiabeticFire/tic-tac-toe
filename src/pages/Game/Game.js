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
          <Cell onPress={(e) => this.cellClicked("cell_1", e)}>
            {this.state.grid.cell_1 === "human" ? "X" : this.state.grid.cell_1 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_2", e)}>
            {this.state.grid.cell_2 === "human" ? "X" : this.state.grid.cell_2 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_3", e)}>
            {this.state.grid.cell_3 === "human" ? "X" : this.state.grid.cell_3 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_4", e)}>
            {this.state.grid.cell_4 === "human" ? "X" : this.state.grid.cell_4 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_5", e)}>
            {this.state.grid.cell_5 === "human" ? "X" : this.state.grid.cell_5 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_6", e)}>
            {this.state.grid.cell_6 === "human" ? "X" : this.state.grid.cell_6 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_7", e)}>
            {this.state.grid.cell_7 === "human" ? "X" : this.state.grid.cell_7 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_8", e)}>
            {this.state.grid.cell_8 === "human" ? "X" : this.state.grid.cell_8 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={(e) => this.cellClicked("cell_9", e)}>
            {this.state.grid.cell_9 === "human" ? "X" : this.state.grid.cell_9 === "ai" ? "O" : null}
          </Cell>
        </div>
      </div>
    );
  }
}

export default Game;
