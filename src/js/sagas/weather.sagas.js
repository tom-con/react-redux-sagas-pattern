import { put, call } from 'redux-saga/effects'

import { getCityWeather } from '../lib/openweather';

import {
  GET_WEATHER_SUCCEEDED,
  GET_WEATHER_FAILED,
} from "../actions/weather.actions"

export function* getWeather(action) {
    try {
        let data = yield call(getCityWeather, action.payload);
        yield put({
            type: GET_WEATHER_SUCCEEDED,
            payload: data
        })
    } catch(e){
      console.tron.error(e.stack)
        yield put({
            type: GET_WEATHER_FAILED,
            payload: e
        })
    }
}
