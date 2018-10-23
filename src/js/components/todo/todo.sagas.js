import { put, call } from 'redux-saga/effects'

import {
  CREATE_TODO_SUCCEEDED, 
  CREATE_TODO_FAILED,
  UPDATE_TODO_SUCCEEDED, 
  UPDATE_TODO_FAILED 
} from "./todo.actions"

async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

 async function create(task) { 
  await wait(1000);
  return {
    id: (new Date()).getTime(),
    name: task,
    isComplete: false,
  }
}

async function update(task) {
  await wait(1000);
  return task
}

export function* createTodo(action) {
    try {
        let data = yield call(create, action.payload);
        yield put({
            type: CREATE_TODO_SUCCEEDED,
            payload: data
        })
    } catch(e){
        yield put({
            type: CREATE_TODO_FAILED,
            payload: e
        })
    }
}

export function* updateTodo(action){
  try {
      let data = yield call(update, action.payload);
      yield put({
          type: UPDATE_TODO_SUCCEEDED,
          payload: data
      })
  } catch(e){
      yield put({
          type: UPDATE_TODO_FAILED,
          payload: e
      })
  }
}
