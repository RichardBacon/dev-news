import React from 'react';
import styles from './Header.module.css';
import { Link } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
  const { username } = props;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" aria-label="home">
          <FontAwesomeIcon className={styles.logo} icon="newspaper" />
        </Link>
        <h1 className={styles.title}>NC News</h1>
        <p className={styles.username}>{username}</p>
      </div>
    </header>
  );
};

export default Header;
