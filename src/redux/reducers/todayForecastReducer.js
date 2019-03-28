import * as actionTypes from '../actions/types';

export default function todayForecast (state={}, action){
    switch (action.type) {
        case actionTypes.GET_TODAY_FORECAST:
            return action.payload;
        default: 
            return state;
    };
};