import React from 'react';
import {
  Button, ButtonGroup, Grid, Container,
} from '@material-ui/core';
import { shape, string, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import UniversitySubjectData from './UniversitySubjectData';
import Dialogo from './dialogo';
import MenuItem from '@material-ui/core/MenuItem';

const subjectPdfSrcDestination = 'http://clp.web.unq.edu.ar/wp-content/uploads/sites/110/2019/09/apuntes.pdf';
const subjectPdfSrcOrigin = 'http://clp.web.unq.edu.ar/wp-content/uploads/sites/110/2019/09/practica4y5.pdf';

export default function RequestDisplay({
  request, onEquivalenceGiven, onEquivalenceDenied, onEquivalenceConsulted,
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
                      <div className={classes.buttonGroup}>
                        <Button className={classes.button} color="primary" variant="contained" onClick={onEquivalenceGiven}>DAR EQUIVALENCIA</Button>
                        <Button className={classes.button} color="primary" variant="contained" onClick={onEquivalenceDenied}>NEGAR EQUIVALENCIA</Button>
                        <Dialogo consultEquivalence={onEquivalenceConsulted}>Consultar</Dialogo>
                        <SimpleMenu />
                      </div>
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

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Idiomas</MenuItem>
        <MenuItem onClick={handleClose}>Sociales</MenuItem>
      </Menu>
    </div>
  );
}
