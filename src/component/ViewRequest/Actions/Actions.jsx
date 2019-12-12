/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
} from '@material-ui/core';
import {
  approveEquivalence, rejectEquivalence, sendConsult, delegateEquivalence,
} from '../../../redux/actions/updateEquivalence';
import FeedbackBar from '../../Dashboard/FeedbackBar';
import { userRole } from '../../../redux/selectors';
import { isAdmin, isProfessor } from '../../UserView/userRole';
import Dialogo from './dialogo';
import RejectDialog from './RejectDialog';
import DelegateButton from './DelegateButton';


const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
  buttonGroup: {
    display: 'flex',
  },
}));

const Actions = ({ request }) => {
  const { requestId, subjectId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const giveEquivalence = useCallback(() => {
    dispatch(approveEquivalence({
      requestId,
      subjectId,
      fileId: request.fk_fileid,
    }));
  }, [dispatch]);
  console.log('Request Test');
  console.log(request);

  const denyEquivalence = useCallback((reason) => {
    dispatch(rejectEquivalence({
      requestId,
      subjectId,
      fileId: request.fk_fileid,
      motive: reason,
    }));
  }, [dispatch]);

  const consultEquivalenceRequest = useCallback((email, message) => {
    dispatch(sendConsult({
      requestId,
      subjectId,
      email,
      message,
    }));
  }, [dispatch]);

  const delegateEquivalenceRequest = useCallback((department) => {
    dispatch(delegateEquivalence({
      requestId,
      subjectId,
      department,
    }));
  }, [dispatch]);

  const user = useSelector((state) => userRole(state));
  const showConsultAndDelegateButton = isAdmin(user);
  const showActionButtons = isAdmin(user) || isProfessor(user);

  return (
    <>
      <div className="container-small">
        {showActionButtons
                && (
                  <>
                    <div className="row justify-content-md-center">
                      <div className={classes.buttonGroup}>
                        <Button
                          className={classes.button}
                          color="primary"
                          variant="contained"
                          onClick={giveEquivalence}
                        >
                          DAR EQUIVALENCIA
                        </Button>
                        <RejectDialog denyEquivalence={denyEquivalence} />
                        {showConsultAndDelegateButton
                          && (
                            <>
                              <Dialogo
                                consultEquivalence={consultEquivalenceRequest}
                              >
                              Consultar
                              </Dialogo>
                              <DelegateButton delegateEquivalence={delegateEquivalenceRequest} />
                            </>
                          )}
                      </div>
                    </div>
                  </>
                )}
      </div>
      <FeedbackBar />
    </>
  );
};

export default Actions;
