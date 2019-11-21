import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import SubjectSelector from './SubjectSelector';
import CreateSubjectDialog from './CreateSubjectDialog';

const validateInternalRequest = Yup.object().shape({
  subjectOriginUnqIds: Yup.string().required('Por favor seleccione una materia'),
  subjectUnqId: Yup.string().required('Por favor seleccione una materia'),
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
  selector: {
    marginBottom: theme.spacing(5),
  },

}));

export default function InternalRequestForm({ onSubmit, onSubmit2 }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ subjectOriginUnqIds: [], subjectUnqId: '' }}
      validationSchema={validateInternalRequest}
      onSubmit={(values) => onSubmit(values.subjectOriginUnqIds, values.subjectUnqId)}
    >
      <Form>
        <div className={classes.selector}>
          <h5>Seleccione una o más materias de origen</h5>
          <Field name="subjectOriginUnqIds" component={SubjectSelector} />
        </div>
        <h5>Seleccione una materia de la Universidad Nacional de Quilmes</h5>
        <Field name="subjectUnqId" component={SubjectSelector} />
        <hr />
        <div className="row">
          <div className="col-6">
            <Button color="primary" variant="contained" type="submit"> Cargar solicitud</Button>
          </div>
          <div className="col-6">
            <CreateSubjectDialog onSubmit={onSubmit2} />
          </div>
        </div>
      </Form>
    </Formik>
  );
}
