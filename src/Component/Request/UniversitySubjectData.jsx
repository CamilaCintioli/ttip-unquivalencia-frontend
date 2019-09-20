
import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from './List';


export default function SimpleCard({ university, subject, content }) {
  return (
    <>

      <Typography variant="h4" component="h4">
        {university}
      </Typography>
      <Typography variant="h6" component="h6">
        {subject}
      </Typography>
      <List materia={content} />
    </>
  );
}
