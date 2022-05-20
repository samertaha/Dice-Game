import React from 'react';

class Dice extends React.Component {
  render() {
    return (
      <div>
        <img
          src={`./images/dice-${this.props.currentDiceRoll[0]}.png`}
          alt='dice1'
          width='50px'
          border='1px solid lightGray'
        />
        <img
          src={`./images/dice-${this.props.currentDiceRoll[1]}.png`}
          alt='dice2'
          width='50px'
          border='1px solid lightGray'
        />
      </div>
    );
  }
}

export default Dice;
