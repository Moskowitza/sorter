import { shallow, mount, render } from 'enzyme';
import React from 'react';

// App is a connected Component, let's fix that
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from './MainPage';

configure({ adapter: new Adapter() });

describe('MainPage', () => {
  let wrapper;
  const mockProps = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false,
  };
  beforeEach(() => {
    wrapper = shallow(<MainPage {...mockProps} />).debug();
  });

  it('renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('filters correctly', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'toki',
          email: 'toki@email.com',
        },
      ],
      searchField: 'a',
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filteredRobots()).toEqual([]);
  });
});
