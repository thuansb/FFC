import React from 'react';
import SearchBar from 'react-search-bar';
import SearchResult from 'components/SearchResult';
import style from './styles.css';
class WikiApp extends React.Component {

  render() {
    return (
      <div>
        <div className={style.searchForm}>
          <SearchBar
            onChange={(input, resolve) => {
              resolve(input);
            }}
          />
        </div>
        <div className={style.searchResult}>
          <SearchResult />
        </div>
      </div>
    );
  }
}

// add properties
mapPropsTo
mapStateTo

export default WikiApp;
