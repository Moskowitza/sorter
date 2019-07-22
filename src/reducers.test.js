import * as reducers from './reducers.js';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';


describe('searchRobots ', () => {
  it('should return initial state', () => {
    const state = '';
    const action = {};
    expect(reducers.searchRobots(state, action)).toEqual('');
  });
  it('handles CHANGE_SEARCH_FIELD', () => {
    const state = '';
    const action = {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc',
    };
    expect(reducers.searchRobots(state, action)).toEqual({ searchField: 'abc' });
  });

  it('returns initial state', () => {
    const state = {
      isPending: false,
      robots: [],
      error: '',
    };
    const action = {};
    expect(reducers.searchRobots(state, action)).toEqual(state);
  });
  it('handles REQUEST_ROBOTS_PENDING', () => {
    const state = {
      isPending: false,
      robots: [],
      error: '',
    };
    const action = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(reducers.searchRobots(state, action)).toEqual({
      error: '',
      isPending: false,
      robots: [],
    });
  });
  it('handles REQUEST_ROBOTS_SUCCESS', () => {
    const state = {
      isPending: false,
      robots: [],
      error: '',
    };
    const action = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{
        id: '1',
        name: 'toki',
        email: 'toki@email.com',
      },
      {
        id: '2',
        name: 'eno',
        email: 'eno@email.com',
      }],
    };
    expect(reducers.searchRobots(state, action)).toEqual(
      {
        error: '',
        isPending: false,
        robots: [],
      },
    );
  });
  it('handles RREQUEST_ROBOTS_FAILED', () => {
    const state = {
      isPending: false,
      robots: [],
      error: '',
    };
    const action = {
      type: REQUEST_ROBOTS_FAILED,
      payload: {
        isPending: false,
        error: '',
        robots: [],
      },
    };
    expect(reducers.searchRobots(state, action)).toEqual(action.payload);
  });
});
