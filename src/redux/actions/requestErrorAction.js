import * as actionTypes from './types';

export function clearRequestError() {
    return {
       type: actionTypes.CLEAR_REQUEST_ERROR, 
    };
};