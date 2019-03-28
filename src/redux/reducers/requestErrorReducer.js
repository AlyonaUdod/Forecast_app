import * as actionTypes from '../actions/types';

export default function requestError (state='', action) {
    switch (action.type) {
        case actionTypes.GET_REQUEST_ERROR:
            return action.payload;
        case actionTypes.CLEAR_REQUEST_ERROR:
            return '';
        default: 
            return state;
    };
};