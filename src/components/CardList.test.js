import { shallow, mount, render } from 'enzyme';
import React from 'react';

import CardList from './CardList';


test('cardList snapshot', () => {
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
  // eslint-disable-next-line no-undef
  const cardList = shallow(<CardList robots={mockRobots} />);
  expect(cardList).toMatchSnapshot();
});
