export const CREATE_TODO_REQUESTED = 'create_todo_requested';
export const CREATE_TODO_SUCCEEDED = 'create_todo_succeeded';
export const CREATE_TODO_FAILED = 'create_todo_failed';

export const UPDATE_TODO_REQUESTED = 'update_todo_requested';
export const UPDATE_TODO_SUCCEEDED = 'update_todo_succeeded';
export const UPDATE_TODO_FAILED = 'update_todo_failed';


export const createTodoReq = text => ({
  type: CREATE_TODO_REQUESTED,
  payload: text,
})

export const updateTodoReq = (id, isComplete) => ({
  type: UPDATE_TODO_REQUESTED,
  payload: { id, isComplete }
})