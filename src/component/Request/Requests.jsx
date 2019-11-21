/* eslint-disable no-new */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { isEmpty } from 'lodash';
import Steappers from './Steppers';
import RequestPage from './RequestPage';
import Match from './Match';
import ListRequest from '../ViewPrimary/ListRequest';

const Requests = ({
  activeStepSets, changeStepSets,
  changeStep, requestsStepper, request, requestsMatch, sets, checkProfessor,
}) => (
  <>
    {sets && requestsStepper
      ? (
        <Steappers
          activeStepSets={activeStepSets}
          changeStepSets={changeStepSets}
          sets={sets}
          changeStep={changeStep}
          requestsStepper={requestsStepper}
        />
      )
      : null}
    {requestsMatch ? (
      <div className="row justify-content-md-center col 1">
        { isEmpty(requestsMatch.requestsMatch) ? <Match requestMatch={requestsMatch} />
          : (
            <>
              <p>
                <a className="btn btn-outline-success btn-lg btn-block" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Historial</a>
              </p>
              <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="multiCollapseExample1">
                    <div className="card card-body">
                      <ListRequest title="Historial Negativo" isSearch={0} requests={requestsMatch.requestsMatch} handleSearchRequest={null} checkAdmin={!false} pageSize={5} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    ) : null}
    {checkProfessor && request.commentsToProfessor
      ? (
        <div className="row justify-content-md-center col 1">
          <p>
            <a className="btn btn-primary btn-lg" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Comentario</a>
          </p>
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card border-dark mb-3">
                  <div className="card-body text-dark">
                    <p className="card-text">{request.commentsToProfessor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

    {request ? <RequestPage request={request} /> : null}
  </>
);

export default Requests;
