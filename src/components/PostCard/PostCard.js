import React from 'react';
import { format } from 'date-fns';
import styles from './PostCard.module.css';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
  const {
    post_id,
    topic,
    title,
    created_by,
    created_at,
    votes,
    comment_count,
  } = props;

  return (
    <article className={styles.postCard}>
      <p className={styles.user}>{created_by}</p>
      <p className={styles.date}>
        {format(new Date(created_at), 'dd MMM yyyy HH:mm')}
      </p>
      <Link className={styles.link} to={`/posts/${post_id}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.details}>
        <Link className={styles.link} to={`/topics/${topic}`}>
          <p>🏷 {topic}</p>
        </Link>
        <p>
          {`💬 ${comment_count} comment${
            Number(comment_count) === 1 ? '' : 's'
          }`}
        </p>
        <p>{`👍 ${votes} like${Number(votes) === 1 ? '' : 's'}`}</p>
      </div>
    </article>
  );
};

export default PostCard;
