import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { UserContext } from '../../contexts/UserContext';
import UserSelector from '../UserSelector/UserSelector';

const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/" aria-label="home">
        Dev News
      </Link>
      <div className={styles.userSection}>
        {username && (
          <Link className={styles.newPost} to="/new">
            New Post
          </Link>
        )}
        <UserSelector />
      </div>
    </header>
  );
};

export default Header;
