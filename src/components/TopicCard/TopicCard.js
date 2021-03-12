import React from 'react';
import styles from './TopicCard.module.css';
import { Link } from 'react-router-dom';

const TopicCard = (props) => {
  const { title, description } = props;

  return (
    <article className={styles.topicCard}>
      <Link className={styles.link} to={`/topics/${title}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.details}>{description}</p>
    </article>
  );
};

export default TopicCard;
