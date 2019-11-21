/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { isEmpty } from 'lodash';
import CardRequest from './Match/CardRequest';
import Resolution from './Match/Resolution';
import useStyles from './Match/style';


export default function Match({ requestMatch }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    requestsTotalMatchApproved,
    requestsMatchWithoutYearPlanApproved,
    subjectsToApprove,

  } = requestMatch;
  const getClass = () => (isEmpty(requestsTotalMatchApproved) ? 'card p-3 text-white bg-warning mb-3' : 'card p-3 text-white bg-info mb-3');
  const requests = isEmpty(requestsTotalMatchApproved) ? requestsMatchWithoutYearPlanApproved : requestsTotalMatchApproved;
  const getComentary = (isEmpty(requestsTotalMatchApproved) ? 'fuera del plan' : 'dentro del plan ');

  return (
    isEmpty(requestsTotalMatchApproved) && isEmpty(requestsMatchWithoutYearPlanApproved) ? null
      : (
        <div className="row justify-content-md-center">
          <button type="button" className="btn btn-outline-success btn-block" onClick={handleOpen}>Historial</button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2>
                  Materias Origen:
                  <span>
                    {' '}
                    {getComentary}
                  </span>
                </h2>

                <hr />
                <div className="contain row justify-content-around">
                  <CardRequest requests={requests} getClass={getClass} />
                </div>
                <div className="contain row justify-content-around">
                  <Resolution subjectsToApprove={subjectsToApprove} requestsTotalMatchApproved={requestsTotalMatchApproved} />
                </div>
              </div>

            </Fade>
          </Modal>
        </div>
      )
  );
}
