import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIn } from 'formik';
import { Selector, createOptions } from '../../Selectors/Selector';
import { getSubjects } from '../../../../redux/actions/subject';
import { yearPlans } from '../../../../redux/selectors';

function createYearOptions(years) {
  if (years === undefined || years.length === 0) {
    return [];
  }
  return years.map((year) => ({ label: year, value: year }));
}

export default function YearSelector({ field: { name, value }, form: { setFieldValue, values } }) {
  const fieldUniversity = name.includes('origin.') ? 'origin.university' : 'unq.university';
  const fieldCareer = name.includes('origin.') ? 'origin.career' : 'unq.career';
  const university = getIn(values, fieldUniversity);
  const career = getIn(values, fieldCareer);
  const years = useSelector((state) => yearPlans(state))[`${university}-${career}`];
  const options = createYearOptions(years);
  const dispatch = useDispatch();

  const handleChange = useCallback((year) => {
    setFieldValue(name, year);
    dispatch(getSubjects());
  }, [dispatch, name, setFieldValue]);

  return (
    <Selector
      options={options}
      onChange={handleChange}
      val={value ? { label: value, value } : null}
      placeholder="Selecciona un año de plan"
    />
  );
}
