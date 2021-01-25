import React from 'react';
import { format } from 'date-fns';
import styles from './Comment.module.css';
import * as api from '../../utils/api';

const Comment = (props) => {
  const {
    deleteCommentFromState,
    username,
    comment_id,
    created_by,
    body,
    created_at,
  } = props;

  const handleDelete = () => {
    api.deleteComment(comment_id).then(() => {
      deleteCommentFromState(comment_id);
    });
  };

  return (
    <article className={styles.comment}>
      <p className={styles.user}>{created_by}</p>
      <p className={styles.date}>
        {format(new Date(created_at), 'dd MMM yyyy HH:mm')}
      </p>

      <p className={styles.body}>{body}</p>

      {username === created_by && (
        <button
          className={styles.deleteBtn}
          onClick={handleDelete}
          aria-label="delete"
        >
          Delete
        </button>
      )}
    </article>
  );
};

export default Comment;
