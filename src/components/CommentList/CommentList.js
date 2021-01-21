import React, { Component } from 'react';
import * as api from '../../utils/api';
import styles from './CommentList.module.css';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    page: 1,
    maxPage: 1,
  };

  render() {
    const { comments, isLoading, page, maxPage } = this.state;
    const { post_id, username } = this.props;

    if (isLoading) return <Loader />;

    return (
      <section>
        <h2 className={styles.title}>Comments</h2>

        <ul>
          {comments.map((comment) => {
            const { comment_id } = comment;

            return (
              <li key={comment_id}>
                <p>{comment_id}</p>
              </li>
            );
          })}
        </ul>

        <Pagination
          page={page}
          maxPage={maxPage}
          handlePageChange={this.handlePageChange}
        />
      </section>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    const pageChanged = prevState.page !== page;

    if (pageChanged) {
      this.getComments();
    }
  }

  getComments = () => {
    const { page } = this.state;
    const { post_id } = this.props;

    this.setState({ isLoading: true });

    api.fetchComments(post_id, page).then(({ comments, total_count }) => {
      const maxPage = Math.ceil(total_count / 10);

      this.setState({ comments, isLoading: false, maxPage });
    });
  };

  addCommentToState = (newComment) => {
    const { updateCommentCount } = this.props;

    this.setState(({ comments }) => {
      return {
        comments: [newComment, ...comments],
      };
    });

    updateCommentCount(1);
  };

  deleteCommentFromState = (comment_id) => {
    const { updateCommentCount } = this.props;

    this.setState(({ comments }) => {
      const updatedComments = comments.filter(
        (comment) => comment_id !== comment.comment_id
      );
      return {
        comments: updatedComments,
      };
    });

    updateCommentCount(-1);
  };

  handlePageChange = (direction) => {
    this.setState(({ page }) => {
      return {
        page: page + direction,
      };
    });
  };
}

export default CommentList;
