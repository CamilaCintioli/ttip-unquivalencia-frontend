/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  approveEquivalence, rejectEquivalence, sendConsult, delegateEquivalence,
} from '../../../../redux/actions/updateEquivalence';
import FeedbackBar from '../../../Dashboard/FeedbackBar';
import { userRole } from '../../../../redux/selectors';
import { isAdmin, isProfessor } from '../../../UserView/userRole';
import Display from './Display';

export default function RequestPage({ request }) {
  const { requestId, subjectId } = useParams();
  const dispatch = useDispatch();
  const giveEquivalence = useCallback(() => {
    dispatch(approveEquivalence({
      requestId,
      subjectId,
      fileId: request.fk_fileid,
    }));
  }, [dispatch]);
  console.log('Request Test');
  console.log(request);

  const denyEquivalence = useCallback((reason) => {
    dispatch(rejectEquivalence({
      requestId,
      subjectId,
      fileId: request.fk_fileid,
      motive: reason,
    }));
  }, [dispatch]);

  const consultEquivalenceRequest = useCallback((email, message) => {
    dispatch(sendConsult({
      requestId,
      subjectId,
      email,
      message,
    }));
  }, [dispatch]);

  const delegateEquivalenceRequest = useCallback((department) => {
    dispatch(delegateEquivalence({
      requestId,
      subjectId,
      department,
    }));
  }, [dispatch]);

  const user = useSelector((state) => userRole(state));

  return (
    <>
      <Display
        request={request}
        onEquivalenceGiven={giveEquivalence}
        onEquivalenceDenied={denyEquivalence}
        onEquivalenceConsulted={consultEquivalenceRequest}
        onEquivalenceDelegated={delegateEquivalenceRequest}
        showConsultAndDelegateButton={isAdmin(user)}
        showActionButtons={isAdmin(user) || isProfessor(user)}
      />
      <FeedbackBar />
    </>
  );
}
