import {
  APPROVE_EQUIVALENCE_START, APPROVE_EQUIVALENCE_COMPLETE, APPROVE_EQUIVALENCE_ERROR,
  REJECT_EQUIVALENCE_START, REJECT_EQUIVALENCE_COMPLETE, REJECT_EQUIVALENCE_ERROR,
  CONSULT_EQUIVALENCE_START, CONSULT_EQUIVALENCE_COMPLETE, CONSULT_EQUIVALENCE_ERROR, DELEGATE_EQUIVALENCE_START,
  DELEGATE_EQUIVALENCE_COMPLETE, DELEGATE_EQUIVALENCE_ERROR,
} from '../../consts/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case APPROVE_EQUIVALENCE_START:
      return { ...state };
    case APPROVE_EQUIVALENCE_COMPLETE:
      return { ...state };
    case APPROVE_EQUIVALENCE_ERROR:
      return { ...state };
    case REJECT_EQUIVALENCE_START:
      return { ...state };
    case REJECT_EQUIVALENCE_COMPLETE:
      return { ...state };
    case REJECT_EQUIVALENCE_ERROR:
      return { ...state };
    case CONSULT_EQUIVALENCE_START:
      return { ...state };
    case CONSULT_EQUIVALENCE_COMPLETE:
      return { ...state };
    case CONSULT_EQUIVALENCE_ERROR:
      return { ...state };
    case DELEGATE_EQUIVALENCE_START:
      return { ...state };
    case DELEGATE_EQUIVALENCE_COMPLETE:
      return { ...state };
    case DELEGATE_EQUIVALENCE_ERROR:
      return { ...state };
    default:
      return { ...state };
  }
}
