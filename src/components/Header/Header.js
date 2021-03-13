import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/" aria-label="home">
        Dev News
      </Link>
      <Link className={styles.newPost} to="/new">
        New Post
      </Link>
    </header>
  );
};

export default Header;
