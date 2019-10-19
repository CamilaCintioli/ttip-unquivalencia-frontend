import { GET_MATCH_START } from '../../consts/actionTypes';

const getMatch = (payload) => ({
  type: GET_MATCH_START,
  payload,
});

export default getMatch;
