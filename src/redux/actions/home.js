import {
    GET_HOME_START,
} from '../../consts/actionTypes';


export const getHome = (payload) => ({
    type: GET_HOME_START,
    payload,
});