import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
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
        </div>
      </>
    );
  }
}

export default App;
