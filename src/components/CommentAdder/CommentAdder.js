import React from 'react';
import styles from './CommentAdder.module.css';
import * as api from '../../utils/api';
import useInputState from '../../hooks/useInputState';

const CommentAdder = ({ addCommentToState, post_id, username }) => {
  const [body, setBody, resetBody] = useInputState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment();
    resetBody();
  };

  const addComment = () => {
    const newComment = { username, body };

    api.postComment(post_id, newComment).then((comment) => {
      addCommentToState(comment);
    });
  };

  return (
    <form className={styles.commentAdder} onSubmit={handleSubmit}>
      <label htmlFor="body" aria-label="body"></label>
      <textarea
        className={styles.commentText}
        id="body"
        name="body"
        value={body}
        onChange={setBody}
        required
        placeholder="Add a comment..."
        maxLength={255}
      ></textarea>

      <button className={styles.commentBtn} aria-label="add">
        Submit
      </button>
    </form>
  );
};

export default CommentAdder;
