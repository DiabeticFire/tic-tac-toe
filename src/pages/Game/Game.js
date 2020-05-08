import React, { Component } from 'react';

//import components
import MenueBar from '../../components/MenueBar/MenueBar.js';
import Board from '../../components/Board/Board.js';

//import css
import './Game.css';

class Game extends Component {
  componentDidMount = () => {};

  render() {
    const getDifficulty = () => {
      let pathname = this.props.location.pathname;
      let difficulty = pathname.substr(6);
      return difficulty;
    };

    return (
      <div className="game">
        <MenueBar />
        <Board difficulty={getDifficulty()} />
      </div>
    );
  }
}

export default Game;
