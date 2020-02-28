import React, { Component } from "react";

//import components
import Cell from "../../components/Cell/Cell.js";

//import css
import "./Board.css";

class Board extends Component {
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
    this.setState({ activePlayer: this.randBoolean() ? "human" : "ai" }, () => {
      if (this.state.activePlayer === "ai") this.ai();
    });
  };

  randBoolean = () => {
    if (Math.random() > 0.5) return true;
    else return false;
  };

  cellClicked = (cellID) => {
    if (this.state.activePlayer !== "human") {
      alert("please wait your turn");
    } else {
      if (this.state.grid[cellID] !== null) {
        alert("please select an empty cell");
      } else {
        let tempState = this.state;
        tempState.grid[cellID] = "human";
        tempState.activePlayer = "ai";
        this.setState(tempState, () => {
          this.ai();
        });
      }
    }
  };

  ai = (difficulty = this.props.difficulty) => {
    let choice = null;

    if (difficulty === "hard") {
      // set up wins
    }

    if (difficulty === "medium") {
      // block human && secure wins
    }

    if (difficulty === "easy") {
      // choose at random
      let tempCounter = 0;
      let options = Object.values(this.state.grid)
        .map((cell) => {
          tempCounter += 1;
          if (cell === null) return tempCounter;
          else return undefined;
        })
        .filter((e) => e !== undefined);

      choice = options[Math.floor(Math.random() * options.length)];
    }

    let tempState = this.state;
    tempState.grid["cell_" + choice] = "ai";
    tempState.activePlayer = "human";
    this.setState(tempState, () => {
      // callback
    });
  };

  render() {
    return (
      <div className="board">
        <div className="grid">
          <Cell onPress={() => this.cellClicked("cell_1")}>
            {this.state.grid.cell_1 === "human" ? "X" : this.state.grid.cell_1 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_2")}>
            {this.state.grid.cell_2 === "human" ? "X" : this.state.grid.cell_2 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_3")}>
            {this.state.grid.cell_3 === "human" ? "X" : this.state.grid.cell_3 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_4")}>
            {this.state.grid.cell_4 === "human" ? "X" : this.state.grid.cell_4 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_5")}>
            {this.state.grid.cell_5 === "human" ? "X" : this.state.grid.cell_5 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_6")}>
            {this.state.grid.cell_6 === "human" ? "X" : this.state.grid.cell_6 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_7")}>
            {this.state.grid.cell_7 === "human" ? "X" : this.state.grid.cell_7 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_8")}>
            {this.state.grid.cell_8 === "human" ? "X" : this.state.grid.cell_8 === "ai" ? "O" : null}
          </Cell>
          <Cell onPress={() => this.cellClicked("cell_9")}>
            {this.state.grid.cell_9 === "human" ? "X" : this.state.grid.cell_9 === "ai" ? "O" : null}
          </Cell>
        </div>
      </div>
    );
  }
}

export default Board;
