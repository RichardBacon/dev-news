import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PostList.module.css';
import * as api from '../../utils/api';
import useInputState from '../../hooks/useInputState';
import PostCard from '../PostCard/PostCard';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import Pagination from '../Pagination/Pagination';
import Sorter from '../Sorter/Sorter';

const PostList = () => {
  const { topic } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort_by, setSort_by] = useInputState('created_at');
  const [order, setOrder] = useInputState('desc');
  const [err, setErr] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const handlePageChange = (direction) => {
    setPage((page) => page + direction);
  };

  useEffect(() => {
    setPage(1);
  }, [topic]);

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
        setErr({
          msg: err?.response?.data?.msg,
          status: err?.response?.status,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [sort_by, order, page, topic]);

  if (err) return <ErrorDisplayer {...err} />;

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>{`Posts: ${topic || 'All'}`}</h1>

        <Sorter
          sort_by={sort_by}
          order={order}
          setSort_by={setSort_by}
          setOrder={setOrder}
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
