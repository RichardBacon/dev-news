import React from 'react';
import styles from './Header.module.css';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/" aria-label="home">
        Dev News
      </Link>
    </header>
  );
};

export default Header;
