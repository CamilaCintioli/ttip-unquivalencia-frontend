import React from 'react';
import { string } from 'prop-types';

function PDFDisplay({ src }) {
  return (<embed src={src} />);
}

PDFDisplay.propTypes = { src: string.isRequired };

export default PDFDisplay;
