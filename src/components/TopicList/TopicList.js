import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import styles from './TopicList.module.css';
import TopicCard from '../TopicCard/TopicCard';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Topics</h1>
      </header>

      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {topics.map((topic) => {
            const { title } = topic;

            return (
              <li key={title}>
                <TopicCard {...topic} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TopicList;
