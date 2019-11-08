/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './selector.css';

export function Selector({
 placeholder, onChange, options, defaultOption, disable,
}) {
  return (
    <Select
      className="selector"
      isSearchable
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value.value)}
      defaultValue={defaultOption}
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

export function MultiSelector({ placeholder, onChange, options }) {
  return (
    <Select
      className="selector"
      isSearchable
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value.map((option) => option.value))}
      isMulti
    />
  );
}

MultiSelector.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
};

MultiSelector.defaultProps = {
  placeholder: 'Selecciona una opcion',
  options: [],
};

export function createOptions(list) {
  return list.map((str) => (
    {
      label: str,
      value: str,
    }
  ));
}