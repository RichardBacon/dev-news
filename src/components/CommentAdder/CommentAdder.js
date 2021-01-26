import React, { Component } from 'react';
import styles from './CommentAdder.module.css';
import * as api from '../../utils/api';

class CommentAdder extends Component {
  state = {
    body: '',
  };

  render() {
    const { body } = this.state;

    return (
      <form className={styles.commentAdder} onSubmit={this.handleSubmit}>
        <label htmlFor="body" aria-label="body"></label>
        <textarea
          className={styles.commentText}
          id="body"
          name="body"
          value={body}
          onChange={this.handleInputChange}
          required
          placeholder="Add a comment..."
          maxLength={255}
        ></textarea>

        <button className={styles.commentBtn} aria-label="add">
          Submit
        </button>
      </form>
    );
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.addComment();

    this.setState({
      username: '',
      body: '',
    });
  };

  addComment = () => {
    const { body } = this.state;
    const { addCommentToState, post_id, username } = this.props;

    const newComment = { username, body };
    console.log(post_id, newComment);
    api.postComment(post_id, newComment).then((comment) => {
      addCommentToState(comment);
    });
  };
}

export default CommentAdder;
