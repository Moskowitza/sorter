import { shallow, mount, render } from 'enzyme';
import React from 'react';

import RobotCard from './RobotCard';

// const enzyme = require('enzyme');
// const Adapter = require('enzyme-adapter-react-16');

// enzyme.configure({ adapter: new Adapter() });
// eslint-disable-next-line no-undef
test('robotCard', () => {
  // eslint-disable-next-line no-undef
  const robotCard = shallow(<RobotCard
    id={1}
    name="aaron"
    email="aaron@email.com"
  />);
  expect(robotCard.length).toEqual(1);
});

test('robotCard Snapshot', () => {
  expect(shallow(<RobotCard
    id={1}
    name="aaron"
    email="aaron@email.com"
  />).debug()).toMatchSnapshot();
});
