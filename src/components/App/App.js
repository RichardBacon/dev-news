import React, { Component } from 'react';
import { Router } from '@reach/router';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import PostList from '../PostList/PostList';
import TopicList from '../TopicList/TopicList';

class App extends Component {
  state = {
    user: {
      username: 'ComicDisaster',
    },
  };

  render() {
    const { user } = this.state;

    return (
      <>
        <Header {...user} />
        <div className={styles.container}>
          <Nav />
          <Router>
            <PostList path="/" />
            <PostList path="/posts" />
            <PostList path="/topics/:topic" />
            <TopicList path="/topics" />
            <ErrorDisplayer default />
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
