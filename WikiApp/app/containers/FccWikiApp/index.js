/*
*
* FccwikiApp
*
*/

import React from 'react';
import SearchBar from 'components/SearchBar';
import SearchResult from 'components/SearchResult';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  selectSearchResult,
} from './selectors';

import {
  searchSubmit,
} from './actions';

import styles from './styles.css';
class FccWikiApp extends React.Component {

  render() {
    return (
      <div>
        <div className={styles.searchForm}>
          <SearchBar
            autoFocus
            placeholder="Search on Wikipedia"
            onChange={(input, resolve) => {
              resolve([]);
            }}
            onSubmit={this.props.onSubmit}
            />
        </div>
        <div className={styles.searchResult}>
          <SearchResult searchResult={this.props.searchResult} />
        </div>
      </div>
    );
  }
}

FccWikiApp.propTypes = {
  onSubmit: React.PropTypes.func,
  searchResult: React.PropTypes.array,
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (value) => dispatch(searchSubmit(value)),
  };
}

export default connect(createSelector(
  selectSearchResult(),
  (searchResult) => ({ searchResult })
),
mapDispatchToProps)(FccWikiApp);
