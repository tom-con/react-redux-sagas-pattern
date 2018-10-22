export const CREATE_TODO_REQUESTED = 'create_todo_requested';
export const CREATE_TODO_SUCCEEDED = 'create_todo_succeeded';
export const CREATE_TODO_FAILED = 'create_todo_failed';

export const COMPLETE_TODO_REQUESTED = 'complete_todo_requested';
export const COMPLETE_TODO_SUCCEEDED = 'complete_todo_succeeded';
export const COMPLETE_TODO_FAILED = 'complete_todo_failed';


export const createTodoReq = text => ({
  type: CREATE_TODO_REQUESTED,
  payload: text,
})

export const completeTodoReq = id => ({
  type: COMPLETE_TODO_REQUESTED,
  payload: id,
})