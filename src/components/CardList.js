import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RobotCard from './RobotCard';

const CardList = ({ robots }) => (

  <Row>
    {robots.map((robot, i) => (
      <Col key={robots[i].id} sm>
        <RobotCard
          key={robots[i].id}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      </Col>
    ))
      }
  </Row>

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
