import React, { Fragment } from 'react';
import './App.css';
import { Header } from './shared/Header.js';
import { Footer } from './shared/Footer.js';
import UserList from './users/UserList.js';
import userArray from '../data/data.js';

const App = () => {
  return (
    <Fragment>
      <Header />
      <UserList users={userArray} />
      <Footer />
    </Fragment>
  )
}

export default App;
