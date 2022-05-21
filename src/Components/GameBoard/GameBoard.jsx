import React from 'react';

import NewGameBtn from './NewGameBtn/NewGameBtn';
import Screen from './Screen/Screen';

class GameBoard extends React.Component {
  render() {
    return (
      <div className='container vert' style={{ height: '100vh' }}>
        <NewGameBtn newGame={this.props.resetGame} />
        <Screen
          currentDiceRoll={this.props.currentDiceRoll}
          rolling={this.props.rolling}
        />
        <div className='container vert'>
          <button
            type='button'
            onClick={this.props.rollIt}
            style={{ flex: '1' }}
          >
            Roll
          </button>
          <button
            type='button'
            onClick={() => {
              this.props.holdCurrentPlayer();
            }}
            style={{ flex: '1' }}
          >
            HOLD
          </button>
        </div>
      </div>
    );
  }
}

export default GameBoard;
