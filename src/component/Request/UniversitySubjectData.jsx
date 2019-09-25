
import React from 'react';
import Typography from '@material-ui/core/Typography';
import PDFDisplay from './PDFDisplay';


export default function UniversitySubjectData({ university, subject, subjectPdfSrc }) {
  return (
    <>

      <Typography variant="h4" component="h4">
        {university}
      </Typography>
      <Typography variant="h6" component="h6">
        {subject}
      </Typography>
      <div style={{ display: 'grid', height: '500px' }}>
        <PDFDisplay src={subjectPdfSrc} />
      </div>
    </>
  );
}
