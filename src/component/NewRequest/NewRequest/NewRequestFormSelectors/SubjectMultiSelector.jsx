import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getIn } from 'formik';
import { MultiSelector } from '../../Selectors/Selector';
import { subjects } from '../../../../redux/selectors';

function createSubjectOptions(subjectList) {
  return subjectList.map((subject) => (
    {
      label: subject.subject,
      value: subject.id,
    }
  ));
}

export default function SubjectMultiSelector({ field: { name, value }, form: { setFieldValue, values } }) {
  const university = getIn(values, 'origin.university');
  const career = getIn(values, 'origin.career');
  const year = getIn(values, 'origin.year');
  const options = createSubjectOptions(useSelector((state) => subjects(state, university, career, year)));

  const handleChange = useCallback((subjectsSelected) => {
    setFieldValue(name, subjectsSelected);
  }, [setFieldValue, name]);

  return (
    <MultiSelector
      options={options}
      placeholder="Selecciona una o más materias"
      onChange={handleChange}
      val={value || null}
    />
  );
}
