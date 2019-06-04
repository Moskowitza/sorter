import { CHANGE_SEARCH_FIELD } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const setSearchField = text => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text,
});
