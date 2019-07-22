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
  it('filters correctly to show nothing', () => {
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
  it('filters correctly with response', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'toki',
          email: 'toki@email.com',
        },
        {
          id: 2,
          name: 'eno',
          email: 'eno@email.com',
        },
      ],
      searchField: 'toki',
      isPending: false,
    };
    const foundRobots = [{
      email: 'toki@email.com',
      id: 1,
      name: 'toki',
    }];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    // eslint-disable-next-line no-undef
    expect(wrapper3.instance().filteredRobots()).toEqual(foundRobots);
  });
});
