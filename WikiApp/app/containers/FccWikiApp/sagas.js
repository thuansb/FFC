import { take, call, put, select } from 'redux-saga/effects';
import { SEARCH_SUBMIT } from './constants';

// All sagas to be loaded
export default [
  defaultSaga,
];

// Individual exports for testing
export function* defaultSaga() {
  while(true) {
    yield take(SEARCH_SUBMIT);
    yield 
  }
}
