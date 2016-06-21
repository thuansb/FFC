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
});

function fccWikiAppReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT:
    console.log(state);
    return state
    .set('searchTerm', action.searchTerm)
    .set('loading', true);
    case SEARCH_RESULT_LOADED:
    console.log(state);
    return state
    .set('searchResult', action.searchResult)
    .set('loading', false);
    default:
    return state;
  }
}

export default fccWikiAppReducer;
