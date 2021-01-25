import React, { Component } from 'react';
import { format } from 'date-fns';
import * as api from '../../utils/api';
import styles from './Post.module.css';
import CommentList from '../CommentList/CommentList';
import Loader from '../Loader/Loader';
import LikeUpdater from '../LikeUpdater/LikeUpdater';
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
      <>
        <article className={styles.post}>
          <p className={styles.user}>{created_by}</p>
          <p className={styles.date}>
            {format(new Date(created_at), 'dd MMM yyyy HH:mm')}
          </p>

          <h3 className={styles.title}>{title}</h3>

          <div className={styles.details}>
            <p>🏷 {topic}</p>
            <p>
              {`💬 ${comment_count} comment${
                Number(comment_count) === 1 ? '' : 's'
              }`}
            </p>
            <p>{`👍 ${votes} like${Number(votes) === 1 ? '' : 's'}`}</p>
          </div>

          <p>{body}</p>
          <LikeUpdater
            updateLikeCount={this.updateLikeCount}
            post_id={post_id}
          />
        </article>
        <CommentList
          updateCommentCount={this.updateCommentCount}
          post_id={post_id}
          username={username}
        />
      </>
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

  updateLikeCount = (increment) => {
    this.setState((currentState) => {
      const updatedPost = { ...currentState.post };
      const updatedLikeCount = parseInt(updatedPost.votes) + increment;
      updatedPost.votes = updatedLikeCount;

      return {
        post: updatedPost,
      };
    });
  };
}

export default Post;
