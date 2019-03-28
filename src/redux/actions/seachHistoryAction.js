import * as actionTypes from './types';

export function getSeachHistory(data){
    return {
        type: actionTypes.GET_SEACH_HISTORY,
        payload: data,
    };
};

export function updateSeachHistory(city){
    return {
        type: actionTypes.UPDATE_SEACH_HISTORY,
        payload: city,
    };
};