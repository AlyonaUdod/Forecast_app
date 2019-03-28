import * as actionTypes from './types';
import { getTodayForecast } from '../api/apiForecast';

export const queryTodayForecast = (param) => dispatch => {
    return getTodayForecast(param)
    // .then(res => console.log(res))
    .then(res => dispatch(addTodayForecastToStore(res.data)))
    .catch(err=> dispatch(requestError(err)));
};

export function addTodayForecastToStore(data) {
    return {
       type: actionTypes.GET_TODAY_FORECAST, 
       payload: data,
    };
};

export function requestError(err) {
    return {
       type: actionTypes.GET_REQUEST_ERROR, 
       payload: 'Sorry, city with that name doesn\'t exist, try again',
    };
};