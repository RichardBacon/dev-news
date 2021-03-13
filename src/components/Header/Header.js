import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import UserSelector from '../UserSelector/UserSelector';

const Header = ({ setUsername }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/" aria-label="home">
        Dev News
      </Link>
      <div className={styles.userSection}>
        <Link className={styles.newPost} to="/new">
          New Post
        </Link>
        <UserSelector setUsername={setUsername} />
      </div>
    </header>
  );
};

export default Header;
