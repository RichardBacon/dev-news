import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.module.css';
import PageLayout from '../PageLayout/PageLayout';
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

        <PageLayout user={user} />
      </>
    );
  }
}

export default App;
