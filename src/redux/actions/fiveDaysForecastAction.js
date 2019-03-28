import * as actionTypes from './types';
import { getFiveDaysForecast } from '../api/apiForecast';

export const queryFiveDaysForecast = (param) => dispatch => {
    return getFiveDaysForecast(param)
    // .then(res => console.log(res))
    .then(res => dispatch(addFiveDaysForecastToStore(res.data.list)))
    .catch(err=> dispatch(requestError(err)));
};

export function addFiveDaysForecastToStore(data) {
    return {
       type: actionTypes.GET_FIVEDAYS_FORECAST, 
       payload: data,
    };
};

export function requestError(err) {
    return {
       type: actionTypes.GET_REQUEST_ERROR, 
       payload: 'Sorry, city with that name doesn\'t exist, try again',
    };
};