import React, { Component } from 'react';
import { Router } from '@reach/router';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

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
          <Router></Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
