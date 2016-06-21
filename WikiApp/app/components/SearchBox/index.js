/**
*
* SearchBox
*
*/

import React from 'react';

import styles from './styles.css';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
};

class SearchBox extends React.Component {

  constructor() {
    super();
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(e) {
    if(e.keyCode === 13) {
      console.log(e.target.value);
      this.props.onSearchSubmit(e.target.value);
    }
  }
  render() {
    return (
      <div>
        <TextField
          ref="searchField"
          className={ styles.searchBox }
          onKeyDown={this.onSearchSubmit} {...this.props}
          leftIcon={
            <FontIcon
              className="material-icons"
              style={iconStyles}>search
            </FontIcon>
          }/>
        </div>
      );
    }
  }

  SearchBox.propTypes = {
    onSearchSubmit: React.PropTypes.func,
  }

  export default SearchBox;
