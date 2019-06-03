import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({
  labelText, name, searchField, onChange,
}) => (
  <div className="pa2">
    <label htmlFor={name}>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        aria-label={labelText}
        aria-required="true"
        placeholder={searchField}
        onChange={onChange}
        value={searchField}
        id={name}
        name={name}
      />
    </label>
  </div>
);
SearchBox.defaultProps = {
  labelText: '',
  searchField: '',
  name: '',
  onChange: () => {},
};
SearchBox.propTypes = {
  labelText: PropTypes.string,
  searchField: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
export default SearchBox;
