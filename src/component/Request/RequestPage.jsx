/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import RequestDisplay from './RequestDisplay';
import { approveEquivalence, rejectEquivalence, sendConsult } from '../../redux/actions/updateEquivalence';

export default function RequestPage({ request }) {
  const dispatch = useDispatch();
  const giveEquivalence = useCallback(() => {
    dispatch(approveEquivalence({
      requestId: request.id,
      fileId: request.fk_fileid,
    }));
  }, [dispatch]);

  const denyEquivalence = useCallback(() => {
    dispatch(rejectEquivalence({
      requestId: request.id,
      fileId: request.fk_fileid,
    }));
  }, [dispatch]);

  const consultEquivalenceRequest = useCallback((email, message) => {
    dispatch(sendConsult({
      requestId: request.id,
      email,
      message,
    }));
  }, [dispatch]);

  return (
    <>
      <RequestDisplay
        request={request}
        onEquivalenceGiven={giveEquivalence}
        onEquivalenceDenied={denyEquivalence}
        onEquivalenceConsulted={consultEquivalenceRequest}
      />
    </>
  );
}
