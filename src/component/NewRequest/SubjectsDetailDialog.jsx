import React, { useState, useCallback } from 'react';
import { connect, getIn } from 'formik';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { DialogActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import { subjectById } from '../../redux/selectors';

const ConnectSubjectsDetailDialog = connect(({
  formik: { values },
}) => {
  const subjectUnqId = getIn(values, 'unq.subject') ? getIn(values, 'unq.subject').id : null;

  const originIds = values.origin.subjects.map((subject) => subject.id.id)
    .filter((id) => id !== undefined);

  const disabled = originIds.length === 0 && !subjectUnqId;

  return (
    <SubjectsDetailDialog
      subjectUnqId={subjectUnqId}
      subjectsIds={originIds}
      disabled={disabled}
    />
  );
});

export default ConnectSubjectsDetailDialog;

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'flex-end',
  },
  card: {
    minWidth: 275,
    marginRight: theme.spacing(2),
  },
  pos: {
    marginBottom: 12,
  },
}));


function SubjectsDetailDialog({ subjectUnqId, subjectsIds, disabled }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleOpen = useCallback(() => setOpen(true), [setOpen]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div>
      <Button
        color="primary"
        onClick={handleOpen}
        className={classes.consultButton}
        disabled={disabled}
      >
        Ver detalles de materias
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth maxWidth="md">
        <DialogTitle id="form-dialog-title">Materias seleccionadas</DialogTitle>
        <DialogContent className={classes.menu}>
          <SubjectsDisplay subjectUnqId={subjectUnqId} subjectsIds={subjectsIds} />
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button color="primary" onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SubjectsDetailDialog.propTypes = {
  subjectUnqId: PropTypes.number,
  subjectsIds: PropTypes.arrayOf(PropTypes.number),
  disabled: PropTypes.bool,
};

SubjectsDetailDialog.defaultProps = {
  subjectUnqId: null,
  subjectsIds: [],
  disabled: false,
};

function SubjectsDisplay({ subjectUnqId, subjectsIds }) {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      {subjectUnqId && <SubjectCardDisplay subjectId={subjectUnqId} />}
      { subjectsIds.map((subject) => (
        <div>
          <SubjectCardDisplay subjectId={subject} />
        </div>
      ))}
    </div>
  );
}

SubjectsDisplay.propTypes = {
  subjectUnqId: PropTypes.number,
  subjectsIds: PropTypes.arrayOf(PropTypes.number),
};

SubjectsDisplay.defaultProps = {
  subjectUnqId: null,
  subjectsIds: [],
};

function SubjectCardDisplay({ subjectId }) {
  const classes = useStyles();
  const subject = useSelector((state) => subjectById(state, subjectId));
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {subject.subject}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {subject.university}
-
            {subject.career}
          </Typography>
          <Typography variant="body2" component="p">
            Año de plan:{' '}
            {subject.yearPlan}
            <br />
            Modalidad:{' '}
            {subject.courseMode}
            <br />
            Horas semanales:{' '}
            {subject.subjectWeeklyHours}
            <br />
            Horas totales:{' '}
            {subject.subjectTotalHours}
            <br />
            Creditos:{' '}
            {subject.credits}
            <br />
          </Typography>
        </CardContent>
      </Card>

    </>
  );
}

SubjectCardDisplay.propTypes = {
  subjectId: PropTypes.number.isRequired,
};
