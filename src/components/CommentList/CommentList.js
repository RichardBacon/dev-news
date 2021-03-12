import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import styles from './CommentList.module.css';
import Comment from '../Comment/Comment';
import CommentAdder from '../CommentAdder/CommentAdder';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

const CommentList = ({ post_id, username, updateCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    api.fetchComments(post_id, page).then(({ comments, total_count }) => {
      const maxPage = Math.ceil(total_count / 10);

      setComments(comments);
      setMaxPage(maxPage);
      setIsLoading(false);
    });
  }, [post_id, page]);

  const addCommentToState = (newComment) => {
    setComments((comments) => {
      return [newComment, ...comments];
    });

    updateCommentCount(1);
  };

  const deleteCommentFromState = (comment_id) => {
    setComments((comments) => {
      const updatedComments = comments.filter(
        (comment) => comment_id !== comment.comment_id
      );
      return updatedComments;
    });

    updateCommentCount(-1);
  };

  const handlePageChange = (direction) => {
    setPage((page) => page + direction);
  };

  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.title}>Comments</h2>
      </header>

      <CommentAdder
        post_id={post_id}
        username={username}
        addCommentToState={addCommentToState}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {comments.map((comment) => {
            const { comment_id } = comment;

            return (
              <li key={comment_id}>
                <Comment
                  deleteCommentFromState={deleteCommentFromState}
                  username={username}
                  {...comment}
                />
              </li>
            );
          })}
        </ul>
      )}

      <Pagination
        page={page}
        maxPage={maxPage}
        handlePageChange={handlePageChange}
      />
    </section>
  );
};

export default CommentList;
