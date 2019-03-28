import * as actionTypes from '../actions/types';

export default function fiveDaysForecast(state=[], action){
    switch (action.type) {
        case actionTypes.GET_FIVEDAYS_FORECAST:
            return action.payload;
        default: 
            return state;
    };
};