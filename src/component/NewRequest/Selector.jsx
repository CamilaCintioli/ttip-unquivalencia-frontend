import React from 'react';
import Select from 'react-select';

const options = [
  { label: 'TPI', value: 'TPI' },
  { label: 'LIC', value: 'LIC' },
];

export default function Selector({ placeholder, setFieldValue, field }) {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={options[0]}
      isSearchable
      options={options}
      placeholder={placeholder}
      onChange={(value) => setFieldValue(field, value.value)}
    />
  );
}
