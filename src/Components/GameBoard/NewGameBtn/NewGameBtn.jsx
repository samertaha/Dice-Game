import React from 'react';

class NewGameBtn extends React.Component {
  render() {
    return (
      <div className='container'>
        <button onClick={this.props.newGame}>
          <i className='fa-solid fa-circle-plus'></i>
          NEW GAME
        </button>
      </div>
    );
  }
}

export default NewGameBtn;
