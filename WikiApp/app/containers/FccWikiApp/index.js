/*
*
* FccwikiApp
*
*/

import React from 'react';
import SearchBar from 'components/SearchBar';
import SearchBox from 'components/SearchBox';
import SearchResult from 'components/SearchResult';
import LoadingIndicator from 'components/LoadingIndicator';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  selectSearchResult,
} from './selectors';

import {
  selectLoading,
} from 'containers/App/selectors'

import {
  searchSubmit,
} from './actions';

import styles from './styles.css';
class FccWikiApp extends React.Component {

  render() {
    let mainContent = null;
    if (this.props.isLoading) {
      mainContent = (<LoadingIndicator />);
    } else {
      mainContent = (<SearchResult searchResult={this.props.searchResult} />);
    }

    return (
      <div>
        <div className={styles.searchForm}>
          <SearchBox
            onSearchSubmit={this.props.onSubmit}
            hintText="Search Wiki"
          />
        </div>
        <div className={styles.searchResult}>
          {mainContent}
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
  selectLoading(),
  (searchResult, isLoading) => ({ searchResult, isLoading })
),
mapDispatchToProps)(FccWikiApp);
