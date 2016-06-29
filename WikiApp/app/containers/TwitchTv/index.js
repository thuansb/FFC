/*
 *
 * TwitchTv
 *
 */

import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import {
  selectTwitchTv,
} from './selectors';

import styles from './styles.css';

class TwitchTv extends React.Component {
  render() {
    return (
      <div className={styles.twitchTv}>
        <Tabs>
          <Tab icon={<FontIcon className="muidocs-icon-action-home" />} />
          <Tab icon={<ActionFlightTakeoff />} />
          <Tab icon={<FontIcon className="material-icons">favorite</FontIcon>} />
        </Tabs>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(createSelector(
  selectTwitchTv(),
), mapDispatchToProps)(TwitchTv);
