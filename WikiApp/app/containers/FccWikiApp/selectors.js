import { createSelector } from 'reselect';

const selectFccWikiApp = () => (state) => state.get('fccWikiApp');

const selectSearchTerm = () => createSelector(
  selectFccWikiApp(),
  (wikiAppState) => wikiAppState.get('searchTerm')
);

const selectSearchResult = () => createSelector(
  selectFccWikiApp(),
  (wikiAppState) => wikiAppState.get('searchResult')
)

export {
  selectSearchTerm,
  selectSearchResult,
};
