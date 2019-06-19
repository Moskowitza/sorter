import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const RobotCard = ({ name, email, id }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{email}</Card.Text>
    </Card.Body>
  </Card>
);

RobotCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default RobotCard;
