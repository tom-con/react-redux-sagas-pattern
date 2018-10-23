export const GET_WEATHER_REQUESTED = 'get_weater_requested';
export const GET_WEATHER_SUCCEEDED = 'get_weather_succeeded';
export const GET_WEATHER_FAILED = 'get_weather_failed';


export const getWeatherReq = text => ({
  type: GET_WEATHER_REQUESTED,
  payload: text,
})
