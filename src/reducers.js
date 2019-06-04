import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: '',
};
// eslint-disable-next-line import/prefer-default-export
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
