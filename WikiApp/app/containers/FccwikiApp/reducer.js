/*
 *
 * FccwikiApp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEARCH_SUBMIT,
} from './constants';

const initialState = fromJS({});

function fccwikiAppReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT:
      return state;
    default:
      return state;
  }
}

export default fccwikiAppReducer;
