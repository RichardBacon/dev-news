import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Helmet } from 'react-helmet';
import OnRouteChange from 'reach-router-scroll-top';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import PostList from '../PostList/PostList';
import TopicList from '../TopicList/TopicList';
import Post from '../Post/Post';
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
        <Helmet>
          <html lang="en" />
          <title>Dev News</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Header {...user} />
        <div className={styles.container}>
          <Nav />
          <Router>
            <PostList path="/" />
            <PostList path="/posts" />
            <PostList path="/topics/:topic" />
            <TopicList path="/topics" />
            <Post path="/posts/:post_id" username={user.username} />
            <ErrorDisplayer default />
          </Router>
          <OnRouteChange />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
