import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);


it('should create an action to search robots', () => {
  const text = 'cat';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('will dispatch with requestRobots', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  console.log(action);
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
