import { GET_USER_START } from '../../consts/actionTypes';


export const getUser = (payload) => ({
  type: GET_USER_START,
  payload,
});
