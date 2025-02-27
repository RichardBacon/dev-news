import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import * as api from '../../utils/api';
import styles from './Post.module.css';
import { UserContext } from '../../contexts/UserContext';
import CommentList from '../CommentList/CommentList';
import Loader from '../Loader/Loader';
import LikeUpdater from '../LikeUpdater/LikeUpdater';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

const Post = () => {
  const { username } = useContext(UserContext);
  const { post_id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const {
    topic,
    title,
    created_by,
    body,
    created_at,
    likes,
    comment_count,
  } = post;

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
      const updatedLikeCount = parseInt(updatedPost.likes) + increment;
      updatedPost.likes = updatedLikeCount;

      return updatedPost;
    });
  };

  const handleDelete = () => {
    api
      .deletePost(post_id)
      .then(({ post_id }) => {
        navigate(`/`);
      })
      .catch((err) => {
        setErr({
          msg: err?.response?.data?.msg,
          status: err?.response?.status,
        });
      });
  };

  useEffect(() => {
    setIsLoading(true);

    api
      .fetchPost(post_id)
      .then((post) => {
        setPost(post);
      })
      .catch((err) => {
        setErr({
          msg: err?.response?.data?.msg,
          status: err?.response?.status,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [post_id]);

  if (err) return <ErrorDisplayer {...err} />;

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
          <Link className={styles.link} to={`/topic/${topic}`}>
            <p>🏷 {topic}</p>
          </Link>
          <p>
            {`💬 ${comment_count} comment${
              Number(comment_count) === 1 ? '' : 's'
            }`}
          </p>
          <p>{`❤️ ${likes} like${Number(likes) === 1 ? '' : 's'}`}</p>
        </div>

        <p className={styles.body}>{body}</p>
        <div className={styles.buttons}>
          {username && (
            <LikeUpdater updateLikeCount={updateLikeCount} post_id={post_id} />
          )}
          {username === created_by && (
            <button
              className={styles.deleteBtn}
              onClick={handleDelete}
              aria-label="delete"
            >
              Delete
            </button>
          )}
        </div>
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
