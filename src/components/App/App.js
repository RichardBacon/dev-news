import React from 'react';
import { Helmet } from 'react-helmet';
import './App.module.css';
import AppLayout from '../AppLayout/AppLayout';
import { UserProvider } from '../../contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Helmet>
        <html lang="en" />
        <title>Dev News</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet>
      <AppLayout />
    </UserProvider>
  );
};

export default App;
