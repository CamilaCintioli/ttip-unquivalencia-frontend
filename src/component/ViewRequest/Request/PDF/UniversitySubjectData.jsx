
import React from 'react';
import { isEmpty } from 'lodash';
import noImage from '../../../../img/noimage.png';

export default function UniversitySubjectData({ university, subject, subjectPdfSrc }) {
  console.log('URL');
  console.log(subjectPdfSrc);

  const getSrc = (url) => (isEmpty(url) || url === 'url' ? noImage : url);

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
      <embed src={getSrc(subjectPdfSrc)} width="550" height="650" />
    </div>


  );
}
