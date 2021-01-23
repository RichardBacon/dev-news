import React, { Component } from 'react';
import styles from './PostList.module.css';
import * as api from '../../utils/api';
import PostCard from '../PostCard/PostCard';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import Pagination from '../Pagination/Pagination';

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

    const heading = `Posts: ${topic || 'All'}`;

    return (
      <main>
        <form className={styles.sortingForm}>
          <label htmlFor="sort_by" aria-label="sort_by">
            <select
              className={styles.sortBy}
              value={sort_by}
              name="sort_by"
              id="sort_by"
              onChange={this.handleInputChange}
            >
              <option value="comment_count">Comments</option>
              <option value="created_at">Date</option>
              <option value="votes">Votes</option>
            </select>
          </label>

          <label htmlFor="order" aria-label="order">
            <select
              className={styles.order}
              value={order}
              name="order"
              id="order"
              onChange={this.handleInputChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </form>

        <h2 className={styles.title}>{heading}</h2>
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
      </main>
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
