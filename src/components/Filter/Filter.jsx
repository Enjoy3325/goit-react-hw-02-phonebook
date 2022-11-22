import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';

export const Filter = ({ value, onChange }) => {
  return (
    <label id={nanoid()}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
