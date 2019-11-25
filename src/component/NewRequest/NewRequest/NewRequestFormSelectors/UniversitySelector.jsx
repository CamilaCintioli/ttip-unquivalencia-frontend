import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Selector, createOptions } from '../../Selectors/Selector';
import { getUniversities, getCareers } from '../../../../redux/actions/subject';
import { universities } from '../../../../redux/selectors';

export default function UniversitySelector({
  field: { name },
  form: { setFieldValue },
}) {
  const dispatch = useDispatch();
  const universidades = useSelector((state) => universities(state));
  const options = createOptions(Object.values(universidades).filter((university) => university !== 'UNQ'));
  useEffect(() => {
    dispatch(getUniversities());
  }, [dispatch]);

  const handleChange = useCallback((university) => {
    dispatch(getCareers({ university }));
    setFieldValue(name, university);
  }, [dispatch, name, setFieldValue]);

  const isUnq = name.includes('unq');

  return (

    <>
      { isUnq
        ? (<Selector defaultOption={{ label: 'UNQ', value: 'UNQ' }} disable onChange={null} />)
        : (
          <Selector
            options={options}
            onChange={handleChange}
            placeholder="Selecciona una universidad"
          />
        )}
    </>
  );
}
