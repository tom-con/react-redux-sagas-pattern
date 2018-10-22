import { takeLatest, takeEvery, all, call, put } from 'redux-saga/effects';

function* rootSaga() {
  try {
    yield all([]);
  } catch (e) {
    const description = `${e}`;
    // yield call(trackException, { description, fatal: true });
    // yield put(setAppError(description));
    throw e;
  }
}

export default rootSaga;
