import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';

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
        <div className={styles.container}>App</div>
      </>
    );
  }
}

export default App;
