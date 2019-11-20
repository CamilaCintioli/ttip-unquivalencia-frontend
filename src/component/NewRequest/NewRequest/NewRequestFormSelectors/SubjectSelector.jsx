import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getIn } from 'formik';
import { Selector } from '../../Selectors/Selector';
import { subjects } from '../../../../redux/selectors';

function createSubjectOptions(subjectList) {
  return subjectList.map((subject) => (
    {
      label: subject.subject,
      value: { name: subject.subject, id: subject.id },
    }
  ));
}

export default function SubjectSelector({
  field: { name, value },
  form: { setFieldValue, values },
}) {
  const career = getIn(values, 'unq.career');
  const year = getIn(values, 'unq.year');
  const options = createSubjectOptions(useSelector((state) => subjects(state, 'UNQ', career, year)));

  const handleChange = useCallback((subject) => {
    setFieldValue(name, subject);
  }, [name, setFieldValue]);
  return (
    <Selector
      options={options}
      onChange={handleChange}
      placeholder="Selecciona una materia"
      val={value ? { label: value.name, value: value.id } : null}
    />
  );
}
