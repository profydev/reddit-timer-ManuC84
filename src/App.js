import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import GlobalStyles from './globalStyle';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/search">Search</Route>
        <Route path="/">Home</Route>
      </Switch>
    </Router>
  );
}

export default App;
