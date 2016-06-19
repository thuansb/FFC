/*
 *
 * FccwikiApp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEARCH_SUBMIT,
} from './constants';

const initialState = fromJS({
  searchTerm: '',
});

function fccwikiAppReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT:
      return state.set('searchTerm', action.searchTerm);
    default:
      return state;
  }
}

export default fccwikiAppReducer;
