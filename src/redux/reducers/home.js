import {get } from 'lodash';
import {
    GET_HOME_START,
    GET_HOME_COMPLETE,
    GET_HOME_ERROR,
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_HOME_START:
            return {...state, isLoading: true };
        case GET_HOME_COMPLETE:
            return {...state, isLoading: false, homeResult: get(action, 'results.data') };
        case GET_HOME_ERROR:
            return {...state, isLoading: false };
        default:
            return {...state };
    }
}