import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shape, string } from 'prop-types';
import RequestDisplay from './RequestDisplay';
import { searchRequestById } from '../../redux/actions/search';

export default function RequestPage(props) {
  const dispatch = useDispatch();
  const request = useSelector((state) => state.search.request);
  useEffect(() => {
    dispatch(searchRequestById({ requestId: props.match.params.solicitudId }));
  }, [searchRequestById]);
  return (<RequestDisplay request={request} />);
}

RequestPage.propTypes = {
  match: shape({
    params: shape({
      solicitudId: string.isRequired,
    }),
  }).isRequired,
};
