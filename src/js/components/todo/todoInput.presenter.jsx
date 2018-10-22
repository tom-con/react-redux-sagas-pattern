import React from 'react';

const TodoInput = ({ buttonText, handleChange, handleSubmit }) => {

  return (
      <div>
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

export default TodoInput