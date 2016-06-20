import React from 'react';

import A from 'components/A';
import styles from './styles.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>FCC@2016</p>
      </section>
      <section>
        <p>By <A href="https://twitter.com/SuThuan">ThuanSB</A>.</p>
      </section>
    </footer>
  );
}

export default Footer;
