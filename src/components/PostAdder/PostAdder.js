import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PostAdder.module.css';
import * as api from '../../utils/api';
import useInputState from '../../hooks/useInputState';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

const PostAdder = ({ username }) => {
  const [topics, setTopics] = useState([]);
  const [title, setTitle, resetTitle] = useInputState('');
  const [body, setBody, resetBody] = useInputState('');
  const [topic, setTopic, resetTopic] = useInputState('Topic...');
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
    resetTitle();
    resetTopic();
    resetBody();
  };

  const addPost = () => {
    const newPost = { username, title, body, topic };

    api
      .postPost(newPost)
      .then(({ post_id }) => {
        navigate(`/posts/${post_id}`);
      })
      .catch((err) => {
        setErr({
          msg: err?.response?.data?.msg,
          status: err?.response?.status,
        });
      });
  };

  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  if (err) return <ErrorDisplayer {...err} />;

  return (
    <form className={styles.postAdder} onSubmit={handleSubmit}>
      <label htmlFor="title" aria-label="title"></label>
      <input
        className={styles.postTitle}
        id="title"
        name="title"
        value={title}
        onChange={setTitle}
        required
        placeholder="Title..."
      ></input>

      <label htmlFor="topic" aria-label="topic"></label>
      <div className={styles.selectContainer}>
        <select
          className={styles.selector}
          disabled={!topics.length}
          value={topic}
          name="topic"
          id="topic"
          onChange={setTopic}
          required
        >
          <option className={styles.option} value="">
            Topic...
          </option>
          {topics.map((topic) => (
            <option key={topic.title} value={topic.title}>
              {topic.title}
            </option>
          ))}
        </select>
      </div>

      <label htmlFor="body" aria-label="body"></label>
      <textarea
        className={styles.postText}
        id="body"
        name="body"
        value={body}
        onChange={setBody}
        required
        placeholder="Post..."
      ></textarea>

      <button className={styles.postBtn} aria-label="add">
        Submit
      </button>
    </form>
  );
};

export default PostAdder;
