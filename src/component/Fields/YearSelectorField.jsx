import React, { useCallback } from 'react';
import { Selector, createOptions } from '../NewRequest/Selectors/Selector';


function range(min, max) {
  return new Array(max - min).fill(null).map((_, index) => min + index);
}

function getCurrentYear() {
  return new Date().getFullYear() + 1;
}

function getFirstYear() {
  return 1995;
}

const yearOptions = createOptions(range(getFirstYear(), getCurrentYear()));

export default function TextField({ form: { setFieldValue }, field: { name }, ...props }) {
  const handleChange = useCallback((year) => {
    setFieldValue(name, year);
  }, [name, setFieldValue]);

  return (
    <Selector
      {...props}
      options={yearOptions}
      onChange={handleChange}
    />

  );
}
