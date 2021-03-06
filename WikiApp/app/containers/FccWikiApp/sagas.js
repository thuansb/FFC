import { take, call, put, select } from 'redux-saga/effects';
import { SEARCH_SUBMIT } from './constants';
import { selectSearchTerm } from './selectors';
import { searchResultLoaded } from './actions';
import request from 'utils/request';
// All sagas to be loaded
export default [
  defaultSaga,
];

// Individual exports for testing
export function* defaultSaga() {
  while(true) {
    yield take(SEARCH_SUBMIT);
    const searchTerm = yield select(selectSearchTerm());
    console.log(searchTerm);
    const wikiURL = `https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&search=${searchTerm}`;
    const searchResult = yield call(request, wikiURL, { mode: 'cors' });

    if (searchResult.err === undefined || searchResult.err === null) {
      console.log(searchResult.data);
      yield put(searchResultLoaded(searchResult.data));
      //yield put(searchRSLoaded(repos.data, username));
    } else {
      console.log(searchResult.err.response); // eslint-disable-line no-console
      //yield put(repoLoadingError(searchResult.err));
    }
  }
}
