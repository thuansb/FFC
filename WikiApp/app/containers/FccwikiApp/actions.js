/*
 *
 * FccwikiApp actions
 *
 */

import {
  SEARCH_SUBMIT,
} from './constants';

export function searchSubmit(searchTerm) {
  return {
    type: SEARCH_SUBMIT,
    searchTerm,
  };
}
