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
    const lines = [
      [this.state.grid.cell_1, this.state.grid.cell_2, this.state.grid.cell_3],
      [this.state.grid.cell_4, this.state.grid.cell_5, this.state.grid.cell_6],
      [this.state.grid.cell_7, this.state.grid.cell_8, this.state.grid.cell_9],
      [this.state.grid.cell_1, this.state.grid.cell_4, this.state.grid.cell_7],
      [this.state.grid.cell_2, this.state.grid.cell_5, this.state.grid.cell_8],
      [this.state.grid.cell_3, this.state.grid.cell_6, this.state.grid.cell_9],
      [this.state.grid.cell_1, this.state.grid.cell_5, this.state.grid.cell_9],
      [this.state.grid.cell_3, this.state.grid.cell_5, this.state.grid.cell_7],
    ];

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
          this.ai();
          console.log('Current Player: ' + this.state.activePlayer);
        });
      }
    }
  };

  ai = () => {
    const lines = this.getLines();
    let choice = ai(this.props.difficulty, this.state.grid);

    let tempState = this.state;
    tempState.grid['cell_' + choice] = 'ai';
    tempState.activePlayer = 'human';
    this.setState(tempState, () => {
      console.log('Current Player: ' + this.state.activePlayer);
    });
  };
  // ai = (difficulty = Number(this.props.difficulty)) => {
  //   let choice = null;
  //   const lines = this.lines();

  //   let tempCounter = 0;
  //   const options = Object.values(this.state.grid)
  //     .map((cell) => {
  //       tempCounter++;
  //       if (cell === null) return tempCounter;
  //       else return undefined;
  //     })
  //     .filter((e) => e !== undefined);

  //   if (difficulty === 'hard') {
  //     // set up wins
  //   }

  //   if (difficulty === 'medium') {
  //     // block human && secure wins
  //     console.log(lines);

  //     lines.forEach((line) => {
  //       let humanNum = 0;
  //       let aiNum = 0;
  //       let nullNum = 0;

  //       line.forEach((cell) => {
  //         if (cell === 'human') humanNum++;
  //         if (cell === 'ai') aiNum++;
  //         if (cell === null) nullNum++;
  //       });

  //       if (nullNum === 1) {
  //         if (aiNum === 2) {
  //           // win the game
  //           console.log(line);
  //         }
  //         if (humanNum === 2) {
  //           // block win
  //           console.log(line);
  //         }
  //       }
  //     });
  //   }

  //   if (difficulty === 'easy') {
  //     // choose at random
  //     choice = options[Math.floor(Math.random() * options.length)];
  //   }

  //   let tempState = this.state;
  //   tempState.grid['cell_' + choice] = 'ai';
  //   tempState.activePlayer = 'human';
  //   this.setState(tempState, () => {
  //     // callback
  //   });
  // };

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
