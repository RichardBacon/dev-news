import React, { Component } from 'react';
import * as api from '../../utils/api';
import styles from './TopicList.module.css';
import TopicCard from '../TopicCard/TopicCard';
import Loader from '../Loader/Loader';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null,
  };

  render() {
    const { topics, isLoading, err } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrorDisplayer {...err} />;

    return (
      <>
        <header className={styles.header}>
          <h1 className={styles.title}>Topics</h1>
        </header>

        <ul>
          {topics.map((topic) => {
            const { title } = topic;

            return (
              <li key={title}>
                <TopicCard {...topic} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    this.setState({ isLoading: true });

    api
      .fetchTopics()
      .then((topics) => {
        this.setState({ topics, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err: { msg: err.response.data.msg, status: err.response.status },
          isLoading: false,
        });
      });
  };
}

export default TopicList;
