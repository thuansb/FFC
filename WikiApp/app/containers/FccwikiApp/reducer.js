/*
 *
 * FccwikiApp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEARCH_SUBMIT,
  SEARCH_RESULT_LOADED,
} from './constants';

const initialState = fromJS({
  searchTerm: '',
  searchResult: [],
});

function fccWikiAppReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT:
      return state.set('searchTerm', action.searchTerm);
    case SEARCH_RESULT_LOADED:
      return state.set('searchResult', action.searchResult);
    default:
      return state;
  }
}

export default fccWikiAppReducer;
