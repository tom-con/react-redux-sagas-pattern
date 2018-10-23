import React from 'react';

const input = ({ buttonText, handleChange, handleSubmit }) => {

  const style = {
    margin: '10px 0px'
  };

  return (
      <div
        style={style}
      >
        <input
          type="text"
          onChange={e => handleChange(e.target.value)}
        />
        <button
          onClick={handleSubmit}
        >
          {buttonText}
        </button>
      </div>
  )
}

export default input