import React, { Component } from 'react';

//import components
import Cell from '../../components/Cell/Cell.js';

//import css
import './Board.css';

//import scripts
import ai from '../../pages/Game/scripts/ai/ai.js';

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
        cell_9: null,
      },
    };
  }

  componentDidMount = () => {
    this.setState({ activePlayer: Math.random() >= 0.5 ? 'human' : 'ai' }, () => {
      if (this.state.activePlayer === 'ai') this.ai();
    });
  };

  getLines = () => {
    const lines = {
      line1: {
        1: this.state.grid.cell_1,
        2: this.state.grid.cell_2,
        3: this.state.grid.cell_3,
      },
      line2: {
        4: this.state.grid.cell_4,
        5: this.state.grid.cell_5,
        6: this.state.grid.cell_6,
      },
      line3: {
        7: this.state.grid.cell_7,
        8: this.state.grid.cell_8,
        9: this.state.grid.cell_9,
      },
      line4: {
        1: this.state.grid.cell_1,
        4: this.state.grid.cell_4,
        7: this.state.grid.cell_7,
      },
      line5: {
        2: this.state.grid.cell_2,
        5: this.state.grid.cell_5,
        8: this.state.grid.cell_8,
      },
      line6: {
        3: this.state.grid.cell_3,
        6: this.state.grid.cell_6,
        9: this.state.grid.cell_9,
      },
      line7: {
        1: this.state.grid.cell_1,
        5: this.state.grid.cell_5,
        9: this.state.grid.cell_9,
      },
      line8: {
        3: this.state.grid.cell_3,
        5: this.state.grid.cell_5,
        7: this.state.grid.cell_7,
      },
    };

    return lines;
  };

  cellClicked = (cellID) => {
    if (this.state.activePlayer !== 'human') {
      alert('please wait your turn');
    } else {
      if (this.state.grid[cellID] !== null) {
        alert('please select an empty cell');
      } else {
        let tempState = this.state;
        tempState.grid[cellID] = 'human';
        tempState.activePlayer = 'ai';
        this.setState(tempState, () => {
          if (!this.checkEnd(this.getLines())) this.ai();
        });
      }
    }
  };

  ai = () => {
    let choice = ai(this.props.difficulty, this.state.grid, this.getLines());

    let tempState = this.state;
    tempState.grid['cell_' + choice] = 'ai';
    tempState.activePlayer = 'human';
    this.setState(tempState, () => {
      this.checkEnd(this.getLines());
    });
  };

  checkEnd = (lines) => {
    for (let line in lines) {
      let humanCount = 0;
      let aiCount = 0;

      for (let cell in lines[line]) {
        if (lines[line][cell] === 'human') humanCount++;
        if (lines[line][cell] === 'ai') aiCount++;
      }

      if (humanCount === 3) this.gameOver('human');
      if (aiCount === 3) this.gameOver('ai');

      return false;
    }
  };

  gameOver = (winner) => {
    console.log(winner + ' wins!');
  };

  render() {
    return (
      <div className="board">
        <div className="grid">
          <Cell onPress={() => this.cellClicked('cell_1')}>
            {this.state.grid.cell_1 === 'human' ? 'X' : this.state.grid.cell_1 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_2')}>
            {this.state.grid.cell_2 === 'human' ? 'X' : this.state.grid.cell_2 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_3')}>
            {this.state.grid.cell_3 === 'human' ? 'X' : this.state.grid.cell_3 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_4')}>
            {this.state.grid.cell_4 === 'human' ? 'X' : this.state.grid.cell_4 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_5')}>
            {this.state.grid.cell_5 === 'human' ? 'X' : this.state.grid.cell_5 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_6')}>
            {this.state.grid.cell_6 === 'human' ? 'X' : this.state.grid.cell_6 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_7')}>
            {this.state.grid.cell_7 === 'human' ? 'X' : this.state.grid.cell_7 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_8')}>
            {this.state.grid.cell_8 === 'human' ? 'X' : this.state.grid.cell_8 === 'ai' ? 'O' : null}
          </Cell>
          <Cell onPress={() => this.cellClicked('cell_9')}>
            {this.state.grid.cell_9 === 'human' ? 'X' : this.state.grid.cell_9 === 'ai' ? 'O' : null}
          </Cell>
        </div>
      </div>
    );
  }
}

export default Board;
