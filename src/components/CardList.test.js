import {
  shallow, mount, render, configure,
} from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import CardList from './CardList';
import RobotCard from './RobotCard';


configure({ adapter: new Adapter() });

const mockRobots = [{
  id: 1,
  name: 'fred',
  email: 'fred@email.com',
},
{
  id: 2,
  name: 'fred',
  email: 'fred@email.com',
},
];
it('cardList snapshot', () => {
  // eslint-disable-next-line no-undef
  const cardList = render(<CardList robots={mockRobots} />);
  expect(cardList).toMatchSnapshot();
});
it('It Renders 2 robotCards', () => {
  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(wrapper.find(RobotCard).length).toBe(2);
});
