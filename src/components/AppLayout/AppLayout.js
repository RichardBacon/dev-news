import React from 'react';
import { Routes } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import ErrorDisplayer from '../ErrorDisplayer/ErrorDisplayer';
import PostList from '../PostList/PostList';
import TopicList from '../TopicList/TopicList';
import Post from '../Post/Post';

const AppLayout = ({ user }) => {
  return (
    <>
      <Header {...user} />
      <div className={styles.container}>
        <SideNav className={styles.SideNav} />
        <main>
          <Routes>
            <PostList path="/" />
            <PostList path="/posts" />
            <PostList path="/topics/:topic" />
            <TopicList path="/topics" />
            <Post path="/posts/:post_id" username={user.username} />
            <ErrorDisplayer path="*" />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
