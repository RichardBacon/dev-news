import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import styles from './UserSelector.module.css';

const UserSelector = ({ setUsername }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.fetchUsers().then(({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <label htmlFor="user" aria-label="user">
      <div className={styles.selectContainer}>
        <select
          className={styles.selector}
          disabled={!users.length}
          name="username"
          id="username"
          onChange={setUsername}
        >
          {users.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
};

export default UserSelector;
