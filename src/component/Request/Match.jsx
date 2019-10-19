/* eslint-disable no-nested-ternary */
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { isEmpty, groupBy } from 'lodash';
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
    requestsMatch,

  } = requestMatch;
  const getClass = () => (isEmpty(requestsTotalMatchApproved) ? 'col-3  card text-white bg-warning mb-3' : 'col-3 card text-white bg-info mb-3');
  const requestsMatchGroupBy = groupBy(requestsMatch, (request) => request.fileNumber);
  const requests = isEmpty(requestsTotalMatchApproved) ? requestsMatchWithoutYearPlanApproved : requestsTotalMatchApproved;

  console.log('requestMatch');
  console.log(requestMatch);
  console.log('requestsMatchGroupBy');
  console.log(requestsMatchGroupBy);
  console.log('requests');
  console.log(requests);

  return (
    isEmpty(requestsTotalMatchApproved) && isEmpty(requestsMatchWithoutYearPlanApproved) ? null
      : (
        <div className="row justify-content-md-center">
          <button type="button" onClick={handleOpen}>
        Historial
          </button>
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
