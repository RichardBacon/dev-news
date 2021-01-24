import React from 'react';
import styles from './SideNav.module.css';
import { Link } from '@reach/router';

const SideNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/">
            🏠 Home
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/topics">
            🏷 Topics
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
