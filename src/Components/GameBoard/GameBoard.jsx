import React, { useContext } from 'react';
import { gameContext } from '../../App';

import NewGameBtn from './NewGameBtn/NewGameBtn';
import Dice from './Screen/Screen';

function GameBoard() {
  let { game, rollIt, resetGame, holdCurrentPlayer } = useContext(gameContext);

  const currentDiceRoll = game.currentDiceRoll;
  const rolling = game.rolling;

  return (
    <div className='container vert' style={{ height: '100vh' }}>
      <NewGameBtn newGame={resetGame} />
      <Dice currentDiceRoll={currentDiceRoll} rolling={rolling} />
      <div className='container vert'>
        <button
          name='true'
          type='button'
          onClick={rollIt}
          style={{ flex: '1' }}
        >
          Roll
        </button>
        <button
          name='true'
          type='button'
          onClick={() => {
            holdCurrentPlayer();
          }}
          style={{ flex: '1' }}
        >
          HOLD
        </button>
      </div>
    </div>
  );
}

export default GameBoard;
