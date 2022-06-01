import React, { useContext } from 'react';
import { gameContext } from '../../App';

function Player(props) {
  const { player } = props;
  //const { currentPlayer, playerName, tempScore, winned, globalScore } = props;
  let { game } = useContext(gameContext);

  console.log(useContext(gameContext));

  const currentPlayer = game[game.currentPlayer].name;
  const playerName = game[player].name;
  const tempScore = game[player].tempScore;
  const winned = game[player].winned;
  const globalScore = game[player].globalScore;

  const myTurn = playerName === currentPlayer;
  return (
    <div
      className='container vert'
      style={{
        transition: 'all .1s ease-in-out',
        border: myTurn || winned ? '2px solid green' : 'none',
      }}
    >
      <h1
        className={winned ? 'blink' : ''}
        style={{
          color: myTurn || winned ? 'green' : 'black',
          fontSize: 'inherit',
        }}
      >
        {winned ? `${playerName} WINNED` : playerName}
      </h1>
      <div className='globalScore'>{globalScore}</div>
      <div className='tempScore'>
        <div>current</div>
        {myTurn ? tempScore : 0}
      </div>
    </div>
  );
}

export default Player;
