import React, { useState } from 'react';
import {
  Button, Grid, Container,
} from '@material-ui/core';
import { shape, string, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UniversitySubjectData from './UniversitySubjectData';
import Dialogo from './dialogo';

const subjectPdfSrcDestination = 'http://clp.web.unq.edu.ar/wp-content/uploads/sites/110/2019/09/apuntes.pdf';
const subjectPdfSrcOrigin = 'http://clp.web.unq.edu.ar/wp-content/uploads/sites/110/2019/09/practica4y5.pdf';

export default function RequestDisplay({
  request, onEquivalenceGiven, onEquivalenceDenied, onEquivalenceConsulted, showConsultAndDelegateButton, showActionButtons, onEquivalenceDelegated
}) {
  const classes = useStyles();
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
              {showActionButtons
                && (
                  <>
                    <Container maxWidth="lg">
                      <div className={classes.buttonGroup}>
                        <Button className={classes.button} color="primary" variant="contained" onClick={onEquivalenceGiven}>DAR EQUIVALENCIA</Button>
                        <Button className={classes.button} color="primary" variant="contained" onClick={onEquivalenceDenied}>NEGAR EQUIVALENCIA</Button>
                        {showConsultAndDelegateButton
                          && (
                            <>
                              <Dialogo
                                consultEquivalence={onEquivalenceConsulted}
                              >
                              Consultar
                              </Dialogo>
                              <DelegateButton delegateEquivalence={onEquivalenceDelegated}/>
                            </>
                          )}
                      </div>
                    </Container>
                  </>
                )}
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

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
  },
}));

function DelegateButton({ delegateEquivalence }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = (item) => {
    delegateEquivalence(item);
    handleClose();
  };

  return (
    <div>
      <Button aria-controls="simple-menu" variant="contained" color="primary" aria-haspopup="true" onClick={handleClick}>
        Delegar
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClickItem('Idiomas')}>Idiomas</MenuItem>
        <MenuItem onClick={() => handleClickItem('Matemáticas')}> Matemáticas</MenuItem>
        <MenuItem onClick={() => handleClickItem('Sociales')}> Sociales</MenuItem>

      </Menu>
    </div>
  );
}
