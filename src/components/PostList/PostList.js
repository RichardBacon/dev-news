import React, { useState, useEffect } from 'react';
import styles from './PostList.module.css';
import * as api from '../../utils/api';
import PostCard from '../PostCard/PostCard';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import Pagination from '../Pagination/Pagination';
import Sorter from '../Sorter/Sorter';

const PostList = ({ topic }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_by] = useState('created_at');
  const [order, setOrder] = useState('desc');
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    api
      .fetchPosts(sort_by, order, topic, page)
      .then(({ posts, total_count }) => {
        const maxPage = Math.ceil(total_count / 10);

        setPosts(posts);
        setMaxPage(maxPage);
      })
      .catch((err) => {
        setErr({ msg: err.response.data.msg, status: err.response.status });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sort_by, order, page, topic]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'sort_by') {
      setSort_by(value);
    }
    if (name === 'order') {
      setOrder(value);
    }
  };

  const handlePageChange = (direction) => {
    setPage((page) => page + direction);
  };

  if (err) return <ErrorDisplayer {...err} />;

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{`Posts: ${topic || 'All'}`}</h1>

        <Sorter
          sort_by={sort_by}
          order={order}
          handleInputChange={handleInputChange}
        />
      </header>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul>
            {posts.map((post) => {
              const { post_id } = post;

              return (
                <li key={post_id}>
                  <PostCard {...post} />
                </li>
              );
            })}
          </ul>

          <Pagination
            page={page}
            maxPage={maxPage}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default PostList;
