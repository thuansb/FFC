/**
*
* SearchBar
*
*/

import React from 'react';
import ReactSearchBar from 'react-search-bar';

import styles from './styles.css';

function SearchBar(props) {
  return (
    <div className={styles.searchBar + ' ' + styles.searchBarWrapper}>
      <ReactSearchBar {...props} />
    </div>
  );
}

export default SearchBar;
