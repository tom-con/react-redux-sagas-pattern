import React from 'react';

import TodoItem from './todoItem.presenter';

const TodoInput = ({ todos, handleChange }) => {

  return (
      <div>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            taskId={todo.id}
            taskName={todo.name}
            isComplete={todo.isComplete}
            handleChange={handleChange}
          />
        ))}
      </div>
  )
}

export default TodoInput