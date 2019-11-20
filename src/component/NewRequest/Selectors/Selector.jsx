/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './selector.css';

export function Selector({
  placeholder, onChange, options, defaultOption, disable, val,
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
      value={val}
    />
  );
}

Selector.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  defaultOption: PropTypes.object,
  disable: PropTypes.bool,
  val: PropTypes.object,
};

Selector.defaultProps = {
  placeholder: 'Selecciona una opcion',
  options: [],
  defaultOption: undefined,
  disable: false,
  val: undefined,
  onChange: undefined,
};

export function MultiSelector({
  placeholder, onChange, options, val,
}) {
  return (
    <Select
      className="selector"
      isSearchable
      options={options}
      placeholder={placeholder}
      onChange={(value) => onChange(value)}
      isMulti
      hideSelectedOptions
      value={val}
    />
  );
}

MultiSelector.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  val: PropTypes.array,
};

MultiSelector.defaultProps = {
  placeholder: 'Selecciona una opcion',
  options: [],
  val: [],
};

export function createOptions(list) {
  return list.map((str) => (
    {
      label: str,
      value: str,
    }
  ));
}
