import { createReducer } from 'reduxsauce'
import { 
  GET_WEATHER_REQUESTED, 
  GET_WEATHER_SUCCEEDED, 
  GET_WEATHER_FAILED,
} from '../actions/weather.actions'

export const INITIAL_STATE = {
    cities: [],
    errorMessage: null,
    showError: false,
    loadingMessage: '',
    showLoading: false,

};

export const clear = () => INITIAL_STATE;

export const gettingWeather = (state, action) => ({
  ...state,
  showLoading: true,
  loadingMessage: `Retrieving weather for: '${action.payload}' :)`
})

export const gotWeather = (state, action) => ({
  ...state,
  cities: [...state.cities, action.payload],
  showLoading: false,
  loadingMessage: '',
});


export const showError = (state, action) => ({
  ...state,
  showError: true,
  errorMessage: `Failed to add weather: ${action.payload}`
})

export const HANDLERS = {
    [GET_WEATHER_REQUESTED]: gettingWeather,
    [GET_WEATHER_SUCCEEDED]: gotWeather,
    [GET_WEATHER_FAILED]: showError,
}

export default createReducer(INITIAL_STATE, HANDLERS)