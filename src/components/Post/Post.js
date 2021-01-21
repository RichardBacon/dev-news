import React, { Component } from 'react';
import * as api from '../../utils/api';
import styles from './Post.module.css';
import CommentList from '../CommentList/CommentList';
import Loader from '../Loader/Loader';
import VoteUpdater from '../VoteUpdater/VoteUpdater';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

class Post extends Component {
  state = {
    post: {},
    isLoading: true,
    err: null,
  };

  render() {
    const { post, isLoading, err } = this.state;
    const { username } = this.props;

    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer {...err} />;

    const {
      post_id,
      topic,
      title,
      created_by,
      body,
      created_at,
      votes,
      comment_count,
    } = post;

    return (
      <main>
        <article className={styles.post}>
          <h2 className={styles.title}>{title}</h2>
          <p>topic: {topic}</p>
          <p>posted by: {created_by}</p>
          <p>{body}</p>
          <p>posted: {new Date(created_at).toLocaleString()}</p>
          <p>comments: {comment_count}</p>
          <VoteUpdater post_id={post_id} votes={votes} />
        </article>
        <CommentList
          updateCommentCount={this.updateCommentCount}
          post_id={post_id}
          username={username}
        />
      </main>
    );
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const { post_id } = this.props;

    this.setState({ isLoading: true });

    api
      .fetchPost(post_id)
      .then((post) => {
        this.setState({ post, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  };

  updateCommentCount = (increment) => {
    this.setState((currentState) => {
      const updatedPost = { ...currentState.post };
      const updatedCommentCount =
        parseInt(updatedPost.comment_count) + increment;
      updatedPost.comment_count = updatedCommentCount;

      return {
        post: updatedPost,
      };
    });
  };
}

export default Post;
