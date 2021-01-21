import React from 'react';
import styles from './Comment.module.css';
import * as api from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VoteUpdater from '../VoteUpdater/VoteUpdater';

const Comment = (props) => {
  const {
    deleteCommentFromState,
    username,
    comment_id,
    created_by,
    body,
    created_at,
    votes,
  } = props;

  const handleDelete = () => {
    api.deleteComment(comment_id).then(() => {
      deleteCommentFromState(comment_id);
    });
  };

  return (
    <article className={styles.comment}>
      <p>{body}</p>
      <p>posted by: {created_by}</p>
      <p>posted: {new Date(created_at).toLocaleString()}</p>
      <VoteUpdater comment_id={comment_id} votes={votes} />
      {username === created_by && (
        <button
          className={styles.deleteBtn}
          onClick={handleDelete}
          aria-label="delete"
        >
          <FontAwesomeIcon className={styles.deleteIcon} icon="times-circle" />
        </button>
      )}
    </article>
  );
};

export default Comment;
