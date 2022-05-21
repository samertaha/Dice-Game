import React from 'react';

class NewGameBtn extends React.Component {
  render() {
    return (
      <div className='container' style={{ flex: '1', height: '15rem' }}>
        <button onClick={this.props.newGame}>
          <i className='fa-solid fa-circle-plus'></i>
          NEW GAME
        </button>
      </div>
    );
  }
}

export default NewGameBtn;
