/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { shape, string, func } from 'prop-types';
import UniversitySubjectData from './UniversitySubjectData';


export default function Display({
  request,
}) {
  const { unqSubject, originSubject } = request;
  return (
    <>
      {request
        && (
          <div className="container">
            <div className="col-12">
              <UniversitySubjectData
                university={originSubject.university}
                subject={originSubject.subject}
                subjectPdfSrc={originSubject.url}
              />
            </div>
            <div className="col-12 ">
              <UniversitySubjectData
                university={unqSubject.university}
                subject={unqSubject.subject}
                subjectPdfSrc={unqSubject.url}
              />
            </div>
          </div>
        )}
    </>
  );
}

Display.defaultProps = { request: undefined };
Display.propTypes = {
  request: shape(
    {
      universityOrigin: string,
      subjectOrigin: string,
      subjectUnq: string,
    },
  ),
};
