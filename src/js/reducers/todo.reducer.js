import { createReducer } from 'reduxsauce'
import { 
  CREATE_TODO_REQUESTED, 
  CREATE_TODO_SUCCEEDED, 
  CREATE_TODO_FAILED 
} from '../actions/todo.actions'

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
  todos: [...state.todos, ...action.payload],
  showLoading: false,
  loadingMessage: '',
});

export const showError = (state, action) => ({
  ...state,
  showError: true,
  errorMessage: `Failed to add todo: ${action.payload}`
})

export const HANDLERS = {
    [CREATE_TODO_SUCCEEDED]: addTodo,
    [CREATE_TODO_FAILED]: showError,
}

export default createReducer(INITIAL_STATE, HANDLERS)