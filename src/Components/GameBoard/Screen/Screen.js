import React, { useContext } from 'react';
import { gameContext } from '../../../App';

function Dice() {
  let { game } = useContext(gameContext);
  console.log('useContext(gameContext)xxx', useContext(gameContext));
  return (
    <div className={`screen`} style={{ flex: '1' }}>
      <img
        src={`./images/dice-${game.currentDiceRoll[0]}.png`}
        alt='dice1'
        width='100px'
        border='1px solid lightGray'
        className={`
                ${game.rolling && ' Die-shaking'}`}
        style={{ marginRight: '20px' }}
      />

      <img
        src={`./images/dice-${game.currentDiceRoll[1]}.png`}
        alt='dice2'
        width='100px'
        border='1px solid lightGray'
        className={`
                ${game.rolling && ' Die-shaking2'}`}
      />
    </div>
  );
}

export default Dice;
