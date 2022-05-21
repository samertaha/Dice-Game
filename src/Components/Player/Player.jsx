import React from 'react';

class Player extends React.Component {
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (
  //     this.props.holdPressed &&
  //     this.props.currentPlayer === this.props.playerName
  //   ) {
  //     console.log('im here');

  //     const global = this.props.globalScore + this.props.tempScore;
  //     //this.setState({ globalScore: global });
  //     console.log('global', global);
  //     if (global < this.props.scoreGoal) {
  //       console.log('smaller than 100');
  //       this.props.switchUsers();
  //     } else if (global === this.props.scoreGoal)
  //       return { globalScore: global, iWinned: true };
  //     else if (global > this.props.scoreGoal) {
  //       this.props.currentPlayerLosed();
  //       return { globalScore: global };
  //     }
  //   } else if (this.props.currentPlayerLosed) {
  //     this.setState(() => {
  //       return { iWinned: true };
  //     });
  //   }
  // };
  render() {
    const { currentPlayer, playerName, tempScore, winned, globalScore } =
      this.props;
    const myTurn = playerName === currentPlayer;
    return (
      <div
        className='container vert'
        style={{
          transition: 'all .1s ease-in-out',
          border: myTurn || winned ? '5px solid green' : 'none',
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
}

export default Player;
