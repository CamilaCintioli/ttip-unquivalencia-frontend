/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default function Selector({ placeholder, onChange, options, defaultOption, disable, isMulti }) {
  return (
    <Select
      className="basic-single"
      isSearchable
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value.value)}
      defaultValue={defaultOption}
      isMulti={isMulti}
      isDisabled={disable}
    />
  );
}

Selector.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  disable: PropTypes.bool,
};

Selector.defaultProps = {
  placeholder: 'Selecciona una opcion',
  options: [],
  defaultOption: undefined,
  disable: false,
};
