import React from 'react';
import TextFieldUI from '@material-ui/core/TextField';

export default function TextField({ form: { handleFocus, handleChange, handleBlur }, field: { name, value }, ...props }) {
    return (
      <TextFieldUI
        {...props}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    );
  }