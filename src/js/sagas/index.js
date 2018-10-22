import { takeLatest, takeEvery, all, call, put } from 'redux-saga/effects';

import { createTodo, updateTodo } from './todo.sagas'

import { 
  CREATE_TODO_REQUESTED, 
  UPDATE_TODO_REQUESTED,  
} from '../actions/todo.actions'

function* rootSaga() {
  try {
    yield all([
      takeEvery(CREATE_TODO_REQUESTED, createTodo),
      takeEvery(UPDATE_TODO_REQUESTED, updateTodo),

    ]);
  } catch (e) {
    const description = `${e}`;
    // yield call(trackException, { description, fatal: true });
    // yield put(setAppError(description));
    throw e;
  }
}

export default rootSaga;
