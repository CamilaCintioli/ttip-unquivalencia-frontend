import React from 'react';
import clsx from 'clsx';
import {
  Card, CardContent, Grid, Typography,
} from '@material-ui/core';
import { isEmpty } from 'lodash';
import styleCard from '../styleCard';

const RequestData = (
  {
    className, title, body, request, ...rest
  },
) => {
  const classes = styleCard();
  const getText = (text) => (isEmpty(text) ? '-' : text);


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card
          {...rest}
          className={clsx(classes.root, className)}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="primary"
              gutterBottom
              variant="h4"
              align="center"
            >
              <b>Datos de solicitud</b>
            </Typography>
            <hr />
            <Grid
              container
              justify="space-between"
            >
              <Grid item xs={4}>
                <Typography variant="h5">
                  <b>Año de equivalencia: </b>
                  {getText(request.yearOfEquivalence)}
                </Typography>
                <Typography variant="h5">
                  <b>Evaluada: </b>
                  {getText(request.signature)}
                </Typography>
                <Typography variant="h5">
                  <b>Estado: </b>
                  {getText(request.equivalence)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">
                  <b>Tipo: </b>
                  {getText(request.type)}
                </Typography>
                <Typography variant="h5">
                  <b>Año aprobada: </b>
                  {getText(request.originSubjectInfo.yearOfApproval)}
                </Typography>
                <Typography variant="h5">
                  <b>Nota: </b>
                  {getText(request.originSubjectInfo.mark)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h5">
                  <b>Observacion: </b>
                  {getText(request.observations)}
                </Typography>
                <Typography variant="h5">
                  <b>Comentario de docente: </b>
                  {getText(request.commentsToProfessor)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RequestData;
