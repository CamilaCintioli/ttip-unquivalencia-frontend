import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import {
  Formik, Form, Field, getIn, ErrorMessage,
} from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormLabel from '@material-ui/core/FormLabel';
import * as Yup from 'yup';
import TextField from '../../Fields/TextField';

const useStyles = makeStyles((theme) => ({
  otherField: {
    display: 'flex',
  },
  fieldError: {
    display: 'flex',
    color: 'red',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  denyButton: {
    marginRight: theme.spacing(2),
  },
  buttonGroup: {
    flexDirection: 'row',
  },
}));

const validationSchema = Yup.object().shape({
  reason: Yup.string(),
  detail: Yup
    .string()
    .when('reason', {
      is: 'otro',
      then: Yup.string().required('Debe especificar un motivo'),
    }),
});

function RadioButtonsGroup({ close, deny }) {
  const classes = useStyles();
  const handleSubmit = ({ reason, detail }) => {
    deny(reason === 'otro' ? detail : reason);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ reason: 'Contenidos minimos insuficientes', detail: '' }} validationSchema={validationSchema}>
      <Form>
        <Field name="reason" component={ReasonSelector} />
        <div className={classes.buttonGroup}>
          <Button color="primary" type="submit">Negar</Button>
          <Button color="primary" onClick={close}>Cerrar</Button>
        </div>
      </Form>
    </Formik>
  );
}

function ReasonDetailField({ form: { values, errors }, field: { name } }) {
  const classes = useStyles();
  return getIn(values, 'reason') === 'otro'
  && (
    <div className={classes.fieldError}>
      <Field name={name} component={TextField} error={errors.detail} />
      <ErrorMessage name="detail" />
    </div>
  );
}

function ReasonSelector({ form: { setFieldValue }, field: { name, value } }) {
  const handleOptionChange = useCallback(({ target: { value } }) => {
    setFieldValue(name, value);
  }, [setFieldValue, name]);
  const classes = useStyles();

  return (
    <FormControl>
      <FormLabel component="legend" focused>Seleccione un motivo de rechazo</FormLabel>
      <FormControlLabel
        value="Contenidos minimos insuficientes"
        checked={value === 'Contenidos minimos insuficientes'}
        onChange={handleOptionChange}
        control={<Radio color="primary" />}
        label="Contenidos minimos insuficientes"
        labelPlacement="end"
      />
      <FormControlLabel
        value="Menor carga horaria en Universidad de origen"
        checked={value === 'Menor carga horaria en Universidad de origen'}
        onChange={handleOptionChange}
        control={<Radio color="primary" />}
        label="Menor carga horaria en Universidad de origen"
        labelPlacement="end"
      />
      <FormControlLabel
        value="No se corresponden los contenidos mínimos de Universidad de origen con plan de estudios UNQ"
        checked={value === 'No se corresponden los contenidos mínimos de Universidad de origen con plan de estudios UNQ'}
        onChange={handleOptionChange}
        control={<Radio color="primary" />}
        label="No se corresponden los contenidos mínimos de Universidad de origen con plan de estudios UNQ"
        labelPlacement="end"
      />
      <FormControlLabel
        value="Está mal presentado el formulario"
        checked={value === 'Está mal presentado el formulario'}
        onChange={handleOptionChange}
        control={<Radio color="primary" />}
        label="Está mal presentado el formulario"
        labelPlacement="end"
      />
      <FormControlLabel
        value="Falta programa de materia o nota en el analítico de materia cursada en Universidad de origen"
        checked={value === 'Falta programa de materia o nota en el analítico de materia cursada en Universidad de origen'}
        onChange={handleOptionChange}
        control={<Radio color="primary" />}
        label="Falta programa de materia o nota en el analítico de materia cursada en Universidad de origen"
        labelPlacement="end"
      />
      <div className={classes.otherField}>
        <FormControlLabel
          value="otro"
          checked={value === 'otro'}
          onChange={handleOptionChange}
          control={<Radio color="primary" />}
          label="Otro"
          labelPlacement="end"
        />
        <Field name="detail" component={ReasonDetailField} />
      </div>
    </FormControl>

  );
}


export default function RejectDialog({ denyEquivalence }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  const handleDenial = useCallback((reason) => {
    denyEquivalence(reason); handleClose();
  }, [denyEquivalence, handleClose]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        aria-label="primary button "
        onClick={handleOpen}
        className={classes.denyButton}
      >
      NEGAR EQUIVALENCIA
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogContent className={classes.menu}>
          <RadioButtonsGroup close={handleClose} deny={handleDenial} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
