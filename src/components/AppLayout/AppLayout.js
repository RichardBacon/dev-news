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
import PostAdder from '../PostAdder/PostAdder';

const AppLayout = ({ username, setUsername }) => {
  return (
    <>
      <Header setUsername={setUsername} />
      <div className={styles.container}>
        <SideNav className={styles.SideNav} />
        <main>
          <Routes>
            <PostList path="/" />
            <PostList path="/posts" />
            <PostList path="/topic/:topic" />
            <TopicList path="/topics" />
            <Post path="/posts/:post_id" username={username} />
            <PostAdder path="/new" username={username} />
            <ErrorDisplayer path="*" />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
