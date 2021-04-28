import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import styles from './SideNav.module.css';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

const SideNav = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .fetchTopics()
      .then(({ topics }) => {
        setTopics(topics);
      })
      .catch((err) => {
        setErr({
          msg: err?.response?.data?.msg,
          status: err?.response?.status,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (err) return <ErrorDisplayer {...err} />;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/">
            <i className={styles.icon}>🏠</i>
            <span>Home</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/topics">
            <i className={styles.icon}>🏷</i>
            <span>Topics</span>
          </Link>
        </li>
        {isLoading ? (
          <Loader />
        ) : (
          topics.map((topic) => {
            const { title } = topic;

            return (
              <li key={title} className={styles.topicItem}>
                <Link className={styles.link} to={`/topic/${title}`}>
                  <span className={styles.topic}>{title}</span>
                </Link>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
};

export default SideNav;
