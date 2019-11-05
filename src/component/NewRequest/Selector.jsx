import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default function Selector({ placeholder, onChange, options }) {
  return (
    <Select
      className="basic-single"
      isSearchable
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value.value)}
    />
  );
}

Selector.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
};

Selector.defaultProps = {
  placeholder: 'Selecciona una opcion',
  options: [],
};
