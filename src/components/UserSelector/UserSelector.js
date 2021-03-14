import React, { useContext, useState, useEffect } from 'react';
import * as api from '../../utils/api';
import styles from './UserSelector.module.css';
import { UserContext } from '../../contexts/UserContext';

const UserSelector = () => {
  const [users, setUsers] = useState([]);
  const { changeUsername } = useContext(UserContext);

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
          onChange={changeUsername}
          required
        >
          <option className={styles.option} value="">
            User...
          </option>
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
