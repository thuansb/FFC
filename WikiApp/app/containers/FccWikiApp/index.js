/*
 *
 * FccwikiApp
 *
 */

import React from 'react';
import SearchBar from 'react-search-bar';
import SearchResult from 'components/SearchResult';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  selectFccWikiApp,
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
              resolve(input);
            }}
            onSubmit={this.props.onSubmit}
          />
        </div>
        <div className={styles.searchResult}>
          <SearchResult />
        </div>
      </div>
    );
  }
}

FccWikiApp.propTypes = {
  onSubmit: React.PropTypes.function.required,
};

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (e) => dispatch(searchSubmit(e.target.value)),
  };
}

export default connect(createSelector(
  selectFccWikiApp(),
), mapDispatchToProps)(FccWikiApp);
