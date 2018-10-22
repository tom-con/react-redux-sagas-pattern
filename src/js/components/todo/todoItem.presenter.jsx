import React from 'react';

const TodoItem = ({ taskId, taskName, isComplete, handleChange }) => {

  const doneStyle = {
    textDecoration: 'line-through',
    color: '#AAA'
  }

  const style = { cursor: 'pointer', ...(isComplete ? doneStyle : {}) }

  return (
    <div
      onClick={() => handleChange(taskId, !isComplete)}
    >
      <label
        style={style}
      >
        {taskName}
        <input 
          type="checkBox"
          checked={isComplete}
          readOnly
        />
      </label>
    </div>
  )
}

export default TodoItem