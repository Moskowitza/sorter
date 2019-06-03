import React from 'react';
import PropTypes from 'prop-types';

const Scroll = (props) => {
  const { children } = props;
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px' }}>
      {children}
    </div>
  );
};

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Scroll;
