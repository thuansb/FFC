/**
*
* SearchResult
*
*/

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from './styles.css';


const SearchResult = (props) => {
  let searchResultList;
  if (props.searchResult) {
    searchResultList = props.searchResult[1].map((rs, idx) => {
      return (
        <div key={idx}>
          <ListItem
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            primaryText={rs}
            secondaryText={
              <p>
                {props.searchResult[2][idx]}
              </p>
            }
            secondaryTextLines={2}
            onTouchTap={e => window.open(props.searchResult[3][idx])}
          />
          <Divider inset />
        </div>
      )
    });
  }

  return (
    <div className={styles.searchResult}>
        <List>
          <Subheader>Wiki search result</Subheader>
          {searchResultList}
        </List>
    </div>
  );
};

SearchResult.propTypes = {
  searchResult: React.PropTypes.array,
};
export default SearchResult;
