import React, { useState, createContext } from 'react';
import Player from './Components/Player/Player';
import GameBoard from './Components/GameBoard/GameBoard';
import dice from './dice.wav';

import './App.css';

export const gameContext = createContext();

function App() {
  const [game, setGame] = useState({
    currentPlayer: 'player1',
    scoreGoal: 100,
    newGame: false,
    holdPressed: false,
    currentDiceRoll: [1, 1],
    rolling: false,
    player1: {
      name: 'Samer',
      tempScore: 0,
      globalScore: 0,
      winned: null,
    },
    player2: {
      name: 'Avi',
      tempScore: 0,
      globalScore: 0,
      winned: null,
    },
  });

  const updateCurrentPlayer = (currentDiceRoll) => {
    if (!currentDiceRoll) {
      let otherPlayer = game.currentPlayer;
      const number = otherPlayer.charAt(otherPlayer.length - 1);
      otherPlayer =
        number === '1'
          ? otherPlayer.replace(/.$/, '2')
          : otherPlayer.replace(/.$/, '1');
      console.log(otherPlayer);
      setGame({
        ...game,
        rolling: true,
        currentDiceRoll: [6, 6],
        currentPlayer: otherPlayer,
        [game.currentPlayer]: {
          ...game[game.currentPlayer],
          tempScore: 0,
        },
      });

      setTimeout(() => {
        setGame({
          ...game,
          rolling: false,
          currentDiceRoll: [6, 6],
          currentPlayer: otherPlayer,
          [game.currentPlayer]: {
            ...game[game.currentPlayer],
            tempScore: 0,
          },
        });
      }, 1500);
    } else {
      console.log('got here now');
      console.log('game.currentPlayer : ', game.currentPlayer);
      setGame({
        ...game,
        rolling: true,
        currentDiceRoll: currentDiceRoll,
        [game.currentPlayer]: {
          ...game[game.currentPlayer],
          tempScore:
            game[game.currentPlayer].tempScore +
            currentDiceRoll[0] +
            currentDiceRoll[1],
        },
      });

      setTimeout(() => {
        setGame({
          ...game,
          rolling: false,
          currentDiceRoll: currentDiceRoll,
          [game.currentPlayer]: {
            ...game[game.currentPlayer],
            tempScore:
              game[game.currentPlayer].tempScore +
              currentDiceRoll[0] +
              currentDiceRoll[1],
          },
        });
      }, 1000);
      console.log('imhere');
    }
  };

  const holdCurrentPlayer = () => {
    if (game.player1.winned || game.player2.winned) resetGame();
    else {
      const globScore =
        game[game.currentPlayer].globalScore +
        game[game.currentPlayer].tempScore;

      let otherPlayer = game.currentPlayer;
      const number = otherPlayer.charAt(otherPlayer.length - 1);
      otherPlayer =
        number === '1'
          ? otherPlayer.replace(/.$/, '2')
          : otherPlayer.replace(/.$/, '1');
      console.log(
        'currentPlayer global ',
        game[game.currentPlayer].globalScore
      );
      setGame({
        ...game,
        currentPlayer: otherPlayer,
        [game.currentPlayer]: {
          ...game[game.currentPlayer],
          tempScore: 0,
          globalScore: globScore,
          winned:
            globScore === game.scoreGoal || game[otherPlayer].globalScore > 100
              ? true
              : false,
        },
        [otherPlayer]: {
          ...game[otherPlayer],
          winned:
            game[otherPlayer].globalScore === game.scoreGoal || globScore > 100
              ? true
              : false,
        },
      });
    }
  };

  const switchUsers = () => {
    let st = {};
    if (game.currentPlayer === 'Player1')
      st = {
        ...game,
        currentPlayer: 'Player2',
        player1: {
          ...game.player1,
          tempScore: 0,
        },
      };
    else
      st = {
        ...game,
        currentPlayer: 'Player1',
        player2: {
          ...game.player2,
          tempScore: 0,
        },
      };
    setGame(st);
  };

  const rollIt = () => {
    if (game.player1.winned || game.player2.winned) resetGame();
    else {
      console.log('got here');
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      console.log('--------------------------------------');
      console.log(dice1, dice2);
      let sound = new Audio(dice);
      sound.play();
      if (dice1 === dice2 && dice1 === 6 && dice2 === 6)
        updateCurrentPlayer(null);
      else updateCurrentPlayer([dice1, dice2]);
    }
  };

  const resetGame = () => {
    setGame({
      currentPlayer: 'player1',
      scoreGoal: 100,
      newGame: false,
      holdPressed: false,
      currentDiceRoll: [1, 1],
      player1: {
        name: 'Samer',
        tempScore: 0,
        globalScore: 0,
        winned: null,
      },
      player2: {
        name: 'Avi',
        tempScore: 0,
        globalScore: 0,
        winned: null,
      },
    });
  };

  return (
    <div div className='container'>
      <gameContext.Provider
        value={{ game, switchUsers, rollIt, resetGame, holdCurrentPlayer }}
      >
        <Player player='player1' />
        <GameBoard />
        <Player player='player2' />
      </gameContext.Provider>
    </div>
  );
}

export default App;
