import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SearchBox = ({
  labelText, name, searchField, onChange,
}) => (
  <Row>
    <Col>
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
  </Col>
    </Row>
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
