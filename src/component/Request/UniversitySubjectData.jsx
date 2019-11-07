
import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function UniversitySubjectData({ university, subject, subjectPdfSrc }) {
  return (
    <div className="row container">
      <div className="col-sm-12">
        <Typography variant="h4" component="h4">
          {university}
        </Typography>
        <Typography variant="h6" component="h6">
          {subject}
        </Typography>
      </div>
      <div className="col-sm-12 12">
        <embed width="100%" height="500px" src={subjectPdfSrc} type="application/pdf" />
      </div>
    </div>
  );
}
