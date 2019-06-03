import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    {
        robots.map((user, i) => (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        ))
      }
  </div>

);
CardList.defaultProps = {
  robots: [],
};
CardList.propTypes = {
  robots: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),

};
export default CardList;
