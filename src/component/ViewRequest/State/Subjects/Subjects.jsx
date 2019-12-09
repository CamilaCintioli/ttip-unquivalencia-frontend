import React from 'react';
import clsx from 'clsx';
import {
  Card, CardContent, Grid, Typography,
} from '@material-ui/core';
import { isEmpty } from 'lodash';
import styleCard from '../styleCard';

const getText = (text) => (isEmpty(text) ? '-' : text);

const CardSubject = ({
  className,
  subject, classes, ...rest
}) => (
  <Card
    {...rest}
    className={clsx(classes.root, className)}
  >
    <Typography
      className={classes.title}
      color="primary"
      gutterBottom
      variant="h4"
      align="center"
    >
      <b>{subject.subject}</b>
    </Typography>
    <hr />
    <CardContent>
      <Grid
        container
        justify="space-between"
      >
        <Grid item>
          <Typography variant="h5">
            <b>Universidad: </b>
            {getText(subject.university)}
          </Typography>
          <Typography variant="h5">
            <b>Carrera: </b>
            {getText(subject.career)}
          </Typography>
          <Typography variant="h5">
            <b>Año del plan: </b>
            {getText(subject.yearPlan)}
          </Typography>
          <Typography variant="h5">
            <b>Modo de cursada: </b>
            {getText(subject.courseMode)}
          </Typography>
          <Typography variant="h5">
            <b>Hora semanal: </b>
            {getText(subject.subjectWeeklyHours)}
          </Typography>
          <Typography variant="h5">
            <b>Hora total: </b>
            {getText(subject.subjectTotalHours)}
          </Typography>
          <Typography variant="h5">
            <b>Core: </b>
            {getText(subject.subjectCore)}
          </Typography>
          <Typography variant="h5">
            <b>Creditos: </b>
            {getText(subject.credits)}
          </Typography>

          <Typography variant="h5">
            <b>Año de equivalencia: </b>
            {getText(subject.yearOfEquivalence)}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);


const Subjects = (
  {
    className, title, body, request, ...rest
  },
) => {
  const classes = styleCard();

  const { unqSubject, originSubject } = request;

  return (
    <Grid container spacing={3}>
      <Grid item xs={5}>
        <CardSubject classes={classes} subject={originSubject} />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <CardSubject classes={classes} subject={unqSubject} />
      </Grid>
    </Grid>
  );
};

export default Subjects;
