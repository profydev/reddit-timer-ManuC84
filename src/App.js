import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'normalize.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" />
        <Route path="/search" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
