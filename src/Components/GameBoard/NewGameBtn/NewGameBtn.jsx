import React from 'react';

function NewGameBtn(props) {
  return (
    <div className='container' style={{ flex: '1', height: '15rem' }}>
      <button onClick={props.newGame}>
        <i className='fa-solid fa-circle-plus'></i>
        NEW GAME
      </button>
    </div>
  );
}

export default NewGameBtn;
