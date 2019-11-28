import {get } from 'lodash';
import {
    GET_FILE_START,
    GET_FILE_COMPLETE,
    GET_FILE_ERROR,
} from '../../consts/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_FILE_START:
            return {...state, isLoading: true };
        case GET_FILE_COMPLETE:
            return {
                ...state,
                isLoading: false,
                fileResult: get(action, 'results.data.files'),
                totalPageFile: get(action, 'results.data.total_pages'),
            };
        case GET_FILE_ERROR:
            return {...state, isLoading: false };
        default:
            return {...state };
    }
}