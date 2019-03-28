import * as actionTypes from '../actions/types';

export default function seachHistory (state=[], action) {
    switch (action.type) {
        case actionTypes.GET_SEACH_HISTORY:
            return action.payload;
        case actionTypes.UPDATE_SEACH_HISTORY:
            let list = [...state]
            list.unshift(action.payload)
            return list.filter((el, index) => index < 5 );
        default: 
            return state;
    };
};