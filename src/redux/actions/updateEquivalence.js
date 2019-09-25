import { APPROVE_EQUIVALENCE_START, REJECT_EQUIVALENCE_START } from '../../consts/actionTypes';

export const approveEquivalence = (payload) => ({
  type: APPROVE_EQUIVALENCE_START,
  payload,
});

export const rejectEquivalence = (payload) => ({
  type: REJECT_EQUIVALENCE_START,
  payload,
});
