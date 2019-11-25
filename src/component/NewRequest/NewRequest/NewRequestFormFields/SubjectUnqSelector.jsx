import React, { useEffect, useState } from 'react';
import {
  Field, ErrorMessage, connect, getIn,
} from 'formik';
import useStyles from '../style';
import UniversitySelector from '../NewRequestFormSelectors/UniversitySelector';
import { UnqCareerSelector } from '../NewRequestFormSelectors/CareerSelector';
import SubjectSelector from '../NewRequestFormSelectors/SubjectSelector';
import YearSelector from '../NewRequestFormSelectors/YearSelector';
import FieldDependency from './FieldDependency';

export default function SubjectUnqSelector({ field: { name } }) {
  const classes = useStyles();
  return (
    <>
      <Field name={`${name}.university`} component={UniversitySelector} />
      <Field name={`${name}.career`} component={UnqCareerSelector} />
      <Field name={`${name}.year`} component={YearSelector} />
      <Field name={`${name}.subject`} component={SubjectSelector} />
      <div className={classes.error}>
        <ErrorMessage name={`${name}.subject`} />
      </div>
      <FieldDependency field={`${name}.career`} dependsOn={`${name}.university`} />
      <FieldDependency field={`${name}.year`} dependsOn={`${name}.career`} />
      <FieldDependency field={`${name}.subject`} dependsOn={`${name}.year`} />
    </>
  );
}
