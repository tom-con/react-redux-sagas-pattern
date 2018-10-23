import { createReducer } from 'reduxsauce'
import { 
  CREATE_TODO_REQUESTED, 
  CREATE_TODO_SUCCEEDED, 
  CREATE_TODO_FAILED,
  UPDATE_TODO_REQUESTED, 
  UPDATE_TODO_SUCCEEDED, 
  UPDATE_TODO_FAILED  
} from './todo.actions'

export const INITIAL_STATE = {
    todos: [],
    errorMessage: null,
    showError: false,
    loadingMessage: '',
    showLoading: false,

};

export const clear = () => INITIAL_STATE;

export const addingTodo = (state, action) => ({
  ...state,
  showLoading: true,
  loadingMessage: `Adding your new todo: '${action.payload}' :)`
})

export const addTodo = (state, action) => ({
  ...state,
  todos: [...state.todos, action.payload],
  showLoading: false,
  loadingMessage: '',
});

export const updatingTodo = state => ({
  ...state,
  showLoading: true,
  loadingMessage: `Updating your todo item! :)`
})

export const updateTodo = (state, action) => {
  const thisTask = state.todos.find(td => td.id === action.payload.id);
  const newTask = { ...thisTask, ...action.payload };
  return {
    ...state,
    todos: [...state.todos.filter(td => td.id !== action.payload.id), newTask],
    showLoading: false
  }
}

export const showError = (state, action) => ({
  ...state,
  showError: true,
  errorMessage: `Failed to add todo: ${action.payload}`
})

export const HANDLERS = {
    [CREATE_TODO_REQUESTED]: addingTodo,
    [CREATE_TODO_SUCCEEDED]: addTodo,
    [CREATE_TODO_FAILED]: showError,
    [UPDATE_TODO_REQUESTED]: updatingTodo,
    [UPDATE_TODO_SUCCEEDED]: updateTodo,
    [UPDATE_TODO_FAILED]: showError,
}

export default createReducer(INITIAL_STATE, HANDLERS)