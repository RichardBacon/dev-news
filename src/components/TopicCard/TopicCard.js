import React from 'react';
import styles from './TopicCard.module.css';
import { Link } from '@reach/router';

const TopicCard = (props) => {
  const { title, description } = props;

  return (
    <article className={styles.topicCard}>
      <Link className={styles.link} to={`/topics/${title}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <p>{description}</p>
    </article>
  );
};

export default TopicCard;
