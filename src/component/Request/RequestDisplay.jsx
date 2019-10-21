import React from 'react';
import {
  Button, ButtonGroup, Grid, Container,
} from '@material-ui/core';
import { shape, string, func } from 'prop-types';
import UniversitySubjectData from './UniversitySubjectData';
import Dialogo from './dialogo';

const subjectPdfSrcDestination = 'http://clp.web.unq.edu.ar/wp-content/uploads/sites/110/2019/09/apuntes.pdf';
const subjectPdfSrcOrigin = 'http://clp.web.unq.edu.ar/wp-content/uploads/sites/110/2019/09/practica4y5.pdf';

export default function RequestDisplay({ request, onEquivalenceGiven, onEquivalenceDenied }) {
  return (
    <>
      {request
                  && (
                  <Container maxWidth="lg">
                    <Container maxWidth="lg">
                      <Grid container>
                        <Grid item xs={6}>
                          <UniversitySubjectData
                            university={request.universityOrigin}
                            subject={request.subjectOrigin}
                            subjectPdfSrc={subjectPdfSrcOrigin}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <UniversitySubjectData
                            university="Universidad Nacional de Quilmes"
                            subject={request.subjectUnq}
                            subjectPdfSrc={subjectPdfSrcDestination}
                          />
                        </Grid>
                      </Grid>
                    </Container>
                    <Container maxWidth="lg">
                      <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label="primary button "
                      >
                        <Button onClick={onEquivalenceGiven}>DAR EQUIVALENCIA</Button>
                        <Button onClick={onEquivalenceDenied}>NEGAR EQUIVALENCIA</Button>
                        <Dialogo consultEquivalence={(values)=> console.log(values)}>Consultar</Dialogo>
                      </ButtonGroup>
                    </Container>
                  </Container>
                  )}

    </>
  );
}

RequestDisplay.defaultProps = { request: undefined };
RequestDisplay.propTypes = {
  request: shape(
    {
      universityOrigin: string,
      subjectOrigin: string,
      subjectUnq: string,
    },
  ),
  onEquivalenceGiven: func.isRequired,
  onEquivalenceDenied: func.isRequired,

};
