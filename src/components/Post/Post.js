import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import * as api from '../../utils/api';
import styles from './Post.module.css';
import { Link } from '@reach/router';
import CommentList from '../CommentList/CommentList';
import Loader from '../Loader/Loader';
import LikeUpdater from '../LikeUpdater/LikeUpdater';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

const Post = ({ username, post_id }) => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    api
      .fetchPost(post_id)
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        setErr({
          msg: err.response.data.msg,
          status: err.response.status,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [post_id]);

  const updateCommentCount = (increment) => {
    setPost((post) => {
      const updatedPost = { ...post };
      const updatedCommentCount =
        parseInt(updatedPost.comment_count) + increment;
      updatedPost.comment_count = updatedCommentCount;

      return updatedPost;
    });
  };

  const updateLikeCount = (increment) => {
    setPost((post) => {
      const updatedPost = { ...post };
      const updatedLikeCount = parseInt(updatedPost.votes) + increment;
      updatedPost.votes = updatedLikeCount;

      return updatedPost;
    });
  };

  if (err) return <ErrorDisplayer {...err} />;

  const {
    topic,
    title,
    created_by,
    body,
    created_at,
    votes,
    comment_count,
  } = post;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <article className={styles.post}>
        <p className={styles.user}>{created_by}</p>
        <p className={styles.date}>
          {format(new Date(created_at), 'dd MMM yyyy HH:mm')}
        </p>

        <h1 className={styles.title}>{title}</h1>

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

        <p>{body}</p>
        <LikeUpdater updateLikeCount={updateLikeCount} post_id={post_id} />
      </article>

      <CommentList
        updateCommentCount={updateCommentCount}
        post_id={post_id}
        username={username}
      />
    </>
  );
};

export default Post;
