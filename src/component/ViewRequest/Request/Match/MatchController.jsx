/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { isEmpty } from 'lodash';
import {
  Card, CardContent, Grid,
} from '@material-ui/core';
import MatchPositivo from './MatchPositive';
import MatchNegative from './MatchNegative';
import styleCard from '../../../shared/styleCard';


const MatchController = ({ requestsMatch }) => {
  const classes = styleCard();
  return (
    <>
      {requestsMatch ? (
        <div className="row justify-content-md-center col 1">
          <Card
            className={classes.root}
          >
            <CardContent>
              <Grid
                container
                justify="space-between"
              >
                <Grid item xs={12}>
                  { isEmpty(requestsMatch.requestsMatch)
                    ? <MatchPositivo requestMatch={requestsMatch} />
                    : <MatchNegative requestsMatch={requestsMatch.requestsMatch} />}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </>
  );
};

export default MatchController;
