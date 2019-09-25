import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shape, string } from 'prop-types';
import RequestDisplay from './RequestDisplay';
import { searchRequestById } from '../../redux/actions/search';
import { approveEquivalence, rejectEquivalence } from '../../redux/actions/updateEquivalence';

export default function RequestPage(props) {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.search.request);
  const giveEquivalence = useCallback(() => {
    dispatch(approveEquivalence({ requestId: props.match.params.solicitudId }));
  }, [dispatch]);
  const denyEquivalence = useCallback(() => {
    dispatch(rejectEquivalence({ requestId: props.match.params.solicitudId }));
  }, [dispatch]);
  useEffect(() => {
    dispatch(searchRequestById({ requestId: props.match.params.solicitudId }));
  }, [dispatch]);
  return (
    <RequestDisplay
      request={request}
      onEquivalenceGiven={giveEquivalence}
      onEquivalenceDenied={denyEquivalence}
    />
  );
}

RequestPage.propTypes = {
  match: shape({
    params: shape({
      solicitudId: string.isRequired,
    }),
  }).isRequired,
};
