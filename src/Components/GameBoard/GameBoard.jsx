import React from 'react';

import NewGameBtn from './NewGameBtn/NewGameBtn';
import Screen from './Screen/Screen';

class GameBoard extends React.Component {
  render() {
    return (
      <div className='container vert'>
        <NewGameBtn newGame={this.props.newGame} />
        <Screen currentDiceRoll={this.props.currentDiceRoll} />
        <button type='button' onClick={this.props.rollIt}>
          Roll
        </button>
        <button
          type='button'
          onClick={() => {
            this.props.holdCurrentPlayer();
          }}
        >
          HOLD
        </button>
      </div>
    );
  }
}

export default GameBoard;
