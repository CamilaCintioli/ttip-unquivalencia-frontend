import React, { useState, useCallback, useEffect } from 'react';
import {
  ErrorMessage, getIn,
} from 'formik';
import './NewRequest.css';
import { makeStyles } from '@material-ui/core/styles';
import Selector from './Selector';
import API from '../../service/SearchService';


function createSubjectOptions(subjects) {
  return subjects.map((subject) => (
    {
      label: subject.subject,
      value: subject.id,
    }
  ));
}

function createOptions(list) {
  return list.map((str) => (
    {
      label: str,
      value: str,
    }
  ));
}

const useStyles = makeStyles({
  container: {
    flexDirection: 'column',
    width: '70%',
  },
  error: {
    color: 'red',
  },
});

export default function SubjectSelector({
  field: { name, value },
  form: { setFieldValue, values },
}) {
  const classes = useStyles();
  const isUnq = useCallback(() => name.includes('Unq'), [name]);
  const [universities, setUniversities] = useState([]);
  const [careers, setCareers] = useState([]);
  const [planYears, setPlanYears] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [universitySelected, setUniversitySelected] = useState('');

  useEffect(() => {
    if (isUnq()) {
      API.searchCareers('UNQ').then((response) => setCareers(response.data));
      setUniversitySelected('UNQ');
    } else {
      API.searchUniversities().then((response) => setUniversities(response.data));
    }
  }, [isUnq, setUniversitySelected, name]);

  const fetchCareers = useCallback((university) => {
    API.searchCareers(university).then((response) => setCareers(response.data));
    setUniversitySelected(university);
  }, []);

  const fetchYears = useCallback((career) => {
    API.searchPlanYears(universitySelected, career).then((response) => setPlanYears(response.data));
    setFieldValue('career', career);
  }, [universitySelected, setFieldValue]);

  const fetchSubjects = useCallback((planYear) => {
    API.searchSubjectsByUniversityCareerAndPlan(universitySelected, getIn(values, 'career'), planYear)
      .then((response) => setSubjects(response.data.subjects));
  }, [universitySelected, values]);

  const selectSubject = useCallback((idSubject) => {
    setFieldValue(name, idSubject);
  });


  return (
    <>
      {isUnq()
        ? (
          <div className={classes.container}>
            <Selector options={[]} onChange={fetchCareers} placeholder="Seleccione una universidad" defaultOption={{ label: 'UNQ', value: 'UNQ' }} disable className={classes.selector} />
            <Selector options={createOptions(careers)} onChange={fetchYears} placeholder="Seleccione una carrera" />
            <Selector options={createOptions(planYears)} onChange={fetchSubjects} placeholder="Seleccione el año del plan" />
            <Selector options={createSubjectOptions(subjects)} onChange={selectSubject} placeholder="Seleccione una materia" />
            <div className={classes.error}>
              <ErrorMessage name={name} />
            </div>
          </div>
        )
        : (
          <div className={classes.container}>

            <Selector options={createOptions(universities)} onChange={fetchCareers} placeholder="Seleccione una universidad" />
            <Selector options={createOptions(careers)} onChange={fetchYears} placeholder="Seleccione una carrera" />
            <Selector options={createOptions(planYears)} onChange={fetchSubjects} placeholder="Seleccione el año del plan" />
            <Selector options={createSubjectOptions(subjects)} onChange={selectSubject} placeholder="Seleccione una materia" />
            <div className={classes.error}>
              <ErrorMessage name={name} />
            </div>
          </div>
        )}


    </>

  );
}
