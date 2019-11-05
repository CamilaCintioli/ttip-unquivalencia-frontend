import React from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import './NewRequest.css';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import SubjectSelector from './SubjectSelector';

const validateExternalRequest = Yup.object().shape({
  subjectOriginIds: Yup.string().required('Por favor ingrese una materia'),
  subjectUnqId: Yup.string().required('Por favor ingrese una materia'),
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
  },
  selector: {
    marginBottom: theme.spacing(5),
  },

}));

export default function ExternalRequestForm({ onSubmit }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ subjectOriginIds: [], subjectUnqId: '' }}
      validationSchema={validateExternalRequest}
      onSubmit={(values) => onSubmit(values.subjectOriginIds, values.subjectUnqId)}
    >
      <Form>
        <div className={classes.selector}>
          <h5>Seleccione una o más materias de origen</h5>
          <Field name="subjectOriginIds" component={SubjectSelector} />
        </div>
        <h5>Seleccione una materia de la Universidad Nacional de Quilmes</h5>
        <Field name="subjectUnqId" component={SubjectSelector} />
        <div className={classes.button}>
          <Button color="primary" variant="contained" type="submit"> Cargar solicitud</Button>
        </div>
      </Form>
    </Formik>
  );
}
