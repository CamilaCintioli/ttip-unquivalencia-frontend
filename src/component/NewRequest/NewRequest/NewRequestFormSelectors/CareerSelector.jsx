import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIn } from 'formik';
import { Selector } from '../../Selectors/Selector';
import { getYearPlans, getCareers } from '../../../../redux/actions/subject';
import { careers } from '../../../../redux/selectors';

function createCareerOptions(careerList) {
  return careerList === undefined
    ? [] : careerList.map((career) => ({ label: career, value: career }));
}

export function CareerSelector({
  field: { name, value },
  form: { setFieldValue, values },
}) {
  const universityField = name.includes('origin.') ? 'origin.university' : 'unq.university';
  const options = createCareerOptions(useSelector((state) => careers(state))[getIn(values, universityField)]);

  const dispatch = useDispatch();
  const handleChange = useCallback((career) => {
    dispatch(getYearPlans({ university: getIn(values, universityField), career }));
    setFieldValue(name, career);
  }, [dispatch, name, setFieldValue, universityField, values]);
  return (
    <Selector
      options={options}
      onChange={handleChange}
      placeholder="Selecciona una carrera"
      val={value ? { label: value, value } : null}
    />

  );
}

export function UnqCareerSelector({
  field: { name, value },
  form: { setFieldValue },
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCareers({ university: 'UNQ' }));
  }, [dispatch]);


  const options = createCareerOptions(useSelector((state) => careers(state)).UNQ);

  const handleChange = useCallback((career) => {
    dispatch(getYearPlans({ university: 'UNQ', career }));
    setFieldValue(name, career);
  }, [dispatch, name, setFieldValue]);
  return (
    <Selector
      options={options}
      onChange={handleChange}
      placeholder="Selecciona una carrera"
      val={value ? { label: value, value } : null}
    />
  );
}
