import React, { Component } from 'react';
import styles from './PostList.module.css';
import * as api from '../../utils/api';
import PostCard from '../PostCard/PostCard';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import Pagination from '../Pagination/Pagination';
import Sorter from '../Sorter/Sorter';

class PostList extends Component {
  state = {
    posts: [],
    isLoading: true,
    sort_by: 'created_at',
    order: 'desc',
    err: null,
    page: 1,
    maxPage: 1,
  };

  render() {
    const { posts, isLoading, sort_by, order, err, page, maxPage } = this.state;
    const { topic } = this.props;

    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer {...err} />;

    return (
      <>
        <header className={styles.header}>
          <h2 className={styles.title}>{`Posts: ${topic || 'All'}`}</h2>

          <Sorter
            sort_by={sort_by}
            order={order}
            handleInputChange={this.handleInputChange}
          />
        </header>

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
          handlePageChange={this.handlePageChange}
        />
      </>
    );
  }

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, page } = this.state;
    const { topic } = this.props;

    const sort_byChanged = prevState.sort_by !== sort_by;
    const orderChanged = prevState.order !== order;
    const pageChanged = prevState.page !== page;
    const topicChanged = prevProps.topic !== topic;

    if (topicChanged) {
      this.setState({ page: 1 });
    }

    if (
      sort_byChanged ||
      orderChanged ||
      (topicChanged && page === 1) ||
      pageChanged
    ) {
      this.getPosts();
    }
  }

  getPosts = () => {
    const { sort_by, order, page } = this.state;
    const { topic } = this.props;

    this.setState({ isLoading: true });

    api
      .fetchPosts(sort_by, order, topic, page)
      .then(({ posts, total_count }) => {
        const maxPage = Math.ceil(total_count / 10);

        this.setState({ posts, isLoading: false, maxPage });
      })
      .catch((err) => {
        this.setState({
          err: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handlePageChange = (direction) => {
    this.setState(({ page }) => {
      return {
        page: page + direction,
      };
    });
  };
}

export default PostList;
