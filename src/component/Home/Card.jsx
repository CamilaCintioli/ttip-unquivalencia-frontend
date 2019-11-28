import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Grid, Typography, Avatar,
} from '@material-ui/core';
import AttachmentIcon from '@material-ui/icons/Attachment';
import NoteIcon from '@material-ui/icons/Note';
import styleCard from '../shared/styleCard';

const Budget = (props) => {
  const {
    className, title, body, type, ...rest
  } = props;

  const classes = styleCard();
  const getIcon = () => (type
    ? <AttachmentIcon className={classes.icon} /> : <NoteIcon className={classes.icon} />);


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {title}
            </Typography>
            <Typography variant="h3">{body}</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              {getIcon()}
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string,
};

export default Budget;
