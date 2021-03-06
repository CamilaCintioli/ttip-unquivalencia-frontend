import {
  APPROVE_EQUIVALENCE_START, REJECT_EQUIVALENCE_START, CONSULT_EQUIVALENCE_START,
  DELEGATE_EQUIVALENCE_START,
} from '../../consts/actionTypes';

export const approveEquivalence = (payload) => ({
  type: APPROVE_EQUIVALENCE_START,
  payload,
});

export const rejectEquivalence = (payload) => ({
  type: REJECT_EQUIVALENCE_START,
  payload,
});

export const sendConsult = (payload) => ({
  type: CONSULT_EQUIVALENCE_START,
  payload,
});

export const delegateEquivalence = (payload) => ({
  type: DELEGATE_EQUIVALENCE_START,
  payload,
});
