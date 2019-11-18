/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RequestDisplay from './RequestDisplay';
import {
  approveEquivalence, rejectEquivalence, sendConsult, delegateEquivalence,
} from '../../redux/actions/updateEquivalence';
import FeedbackBar from '../FeedbackBar';
import { userRole } from '../../redux/selectors';
import { isAdmin, isProfessor } from '../User/userRole';

export default function RequestPage({ request }) {
  const { requestId, subjectId } = useParams();
  const dispatch = useDispatch();
  const giveEquivalence = useCallback(() => {
    dispatch(approveEquivalence({
      requestId: request.id,
      fileId: request.fk_fileid,
    }));
  }, [dispatch]);

  const denyEquivalence = useCallback((reason) => {
    dispatch(rejectEquivalence({
      requestId: request.id,
      fileId: request.fk_fileid,
      motive: reason,
    }));
  }, [dispatch]);

  const consultEquivalenceRequest = useCallback((email, message) => {
    dispatch(sendConsult({
      requestId: request.id,
      email,
      message,
      subjectId,
    }));
  }, [dispatch]);

  const delegateEquivalenceRequest = useCallback((department) => {
    dispatch(delegateEquivalence({
      requestId: request.id,
      department,
    }));
  }, [dispatch]);

  const user = useSelector((state) => userRole(state));

  console.log('caca');
  console.log(request);

  return (
    <>
      <RequestDisplay
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
