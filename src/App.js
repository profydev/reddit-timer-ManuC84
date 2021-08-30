import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';
import GlobalStyle from './globalStyle';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/search">Home</Route>
        <Route path="/">Search</Route>
      </Switch>
    </Router>
  );
}

export default App;
