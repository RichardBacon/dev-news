import React from 'react';
import styles from './PostCard.module.css';
import { Link } from '@reach/router';

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
      <Link className={styles.link} to={`/posts/${post_id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <p>topic: {topic}</p>
      <p>posted by: {created_by}</p>
      <p>posted: {new Date(created_at).toUTCString()}</p>
      <p>comments: {comment_count}</p>
      <p>votes: {votes}</p>
    </article>
  );
};

export default PostCard;
