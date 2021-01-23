import React from 'react';
import { Router } from '@reach/router';
import OnRouteChange from 'reach-router-scroll-top';
import styles from './PageLayout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import PostList from '../PostList/PostList';
import TopicList from '../TopicList/TopicList';
import Post from '../Post/Post';

const PageLayout = ({ user }) => {
  return (
    <>
      <Header {...user} />
      <div className={styles.container}>
        <SideNav />
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
};

export default PageLayout;
