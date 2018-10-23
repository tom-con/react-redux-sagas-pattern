import { takeEvery, all } from 'redux-saga/effects';

import { createTodo, updateTodo } from '../components/todo/todo.sagas';
import { getWeather } from '../components/weather/weather.sagas';

import { 
  CREATE_TODO_REQUESTED, 
  UPDATE_TODO_REQUESTED,  
} from '../components/todo/todo.actions'

import { 
  GET_WEATHER_REQUESTED, 
} from '../components/weather/weather.actions'

function* rootSaga() {
  try {
    yield all([
      takeEvery(CREATE_TODO_REQUESTED, createTodo),
      takeEvery(UPDATE_TODO_REQUESTED, updateTodo),
      takeEvery(GET_WEATHER_REQUESTED, getWeather),
    ]);
  } catch (e) {
    const description = `${e}`;
    // yield call(trackException, { description, fatal: true });
    // yield put(setAppError(description));
    throw e;
  }
}

export default rootSaga;
