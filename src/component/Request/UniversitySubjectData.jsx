
import React from 'react';

export default function UniversitySubjectData({ university, subject, subjectPdfSrc }) {
  return (

    <div className="card">
      <div className="card-body text-white bg-dark mb-3">
        <blockquote className="blockquote text-center">
          <p className="h3">
            <b>
              {university}
              -
              {subject}
            </b>

          </p>
        </blockquote>
      </div>
      <embed src={subjectPdfSrc} width="100%" height="500px" />
    </div>


  );
}
