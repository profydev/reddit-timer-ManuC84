import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import GlobalStyles from './globalStyle';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/search">
          <h1>search page</h1>
        </Route>
        <Route path="/">
          <h1>home page</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
