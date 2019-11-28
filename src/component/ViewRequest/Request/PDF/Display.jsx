/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import {
  Button,
} from '@material-ui/core';
import { shape, string, func } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import UniversitySubjectData from './UniversitySubjectData';
import Dialogo from './dialogo';
import RejectDialog from './RejectDialog';


export default function Display({
  request, onEquivalenceGiven, onEquivalenceDenied,
  onEquivalenceConsulted, showConsultAndDelegateButton,
  showActionButtons, onEquivalenceDelegated,
}) {
  const { unqSubject, originSubject } = request;
  const classes = useStyles();
  return (
    <>
      {request
        && (
          <div className="container">
            <div className="col-12">
              <UniversitySubjectData
                university={originSubject.university}
                subject={originSubject.subject}
                subjectPdfSrc={originSubject.url}
              />
            </div>
            <div className="col-12 ">
              <UniversitySubjectData
                university={unqSubject.university}
                subject={unqSubject.subject}
                subjectPdfSrc={unqSubject.url}
              />
            </div>
          </div>
        )}
      <br />
      <div className="container-small">
        {showActionButtons
                && (
                  <>
                    <div className="row justify-content-md-center">
                      <div className={classes.buttonGroup}>
                        <Button className={classes.button} color="primary" variant="contained" onClick={onEquivalenceGiven}>DAR EQUIVALENCIA</Button>
                        <RejectDialog denyEquivalence={onEquivalenceDenied} />
                        {showConsultAndDelegateButton
                          && (
                            <>
                              <Dialogo
                                consultEquivalence={onEquivalenceConsulted}
                              >
                              Consultar
                              </Dialogo>
                              <DelegateButton delegateEquivalence={onEquivalenceDelegated} />
                            </>
                          )}
                      </div>
                    </div>
                  </>
                )}
      </div>
    </>
  );
}

Display.defaultProps = { request: undefined };
Display.propTypes = {
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
        <MenuItem onClick={() => handleClickItem('Gira a la Coordinación de Idiomas')}>Idiomas</MenuItem>
        <MenuItem onClick={() => handleClickItem('Gira a la Coordinación de Ciclo Introductorio')}>Ciclo Introductorio</MenuItem>
        <MenuItem onClick={() => handleClickItem('Gira a la Coordinación del Área Matemática')}>Área Matemática</MenuItem>

      </Menu>
    </div>
  );
}
