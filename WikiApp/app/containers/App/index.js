/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import H1 from 'components/H1';
import Footer from 'components/Footer';
import Banner from './banner-metal.jpg';
import A from 'components/H1';

import styles from './styles.css';

function App(props) {
  return (
    <div className={styles.wrapper}>
      <A className={styles.logoWrapper} href="https://github.com/thuansb/">
        <H1>FREE CODE CAMP ASSIGNMENT</H1>
      </A>
      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
