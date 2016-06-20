/*
 *
 * FccwikiApp actions
 *
 */

import {
  SEARCH_SUBMIT,
  SEARCH_RESULT_LOADED,
} from './constants';

export function searchSubmit(searchTerm) {
  return {
    type: SEARCH_SUBMIT,
    searchTerm,
  };
}

export function searchResultLoaded(searchResult) {
  return {
    type: SEARCH_RESULT_LOADED,
    searchResult,
  }
}
