import {
    GET_FILE_START,
} from '../../consts/actionTypes';

export const getFile = (payload) => ({
    type: GET_FILE_START,
    payload,
});