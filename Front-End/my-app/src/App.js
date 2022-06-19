import React from 'react';
import { Route, Switch } from 'react-router';
import Article from './pages/Article';
import Category from './pages/Category';

function App() {
  return (
    <Switch>
      <Route path="/category" component={ Category } />
      <Route path="/article" component={ Article } />
    </Switch>
  );
}

export default App;
