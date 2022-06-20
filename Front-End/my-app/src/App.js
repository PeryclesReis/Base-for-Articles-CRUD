import React from 'react';
import { Route, Switch } from 'react-router';
import CreateArticle from './components/CreateArticle';
import CreateCategory from './components/CreateCategory';
import DeleteArticle from './components/DeleteArticle';
import DeleteCategory from './components/DeleteCategory';
import UpdateArticle from './components/UpdateArticle';
import UpdateCategory from './components/UpdateCategory';
import Article from './pages/Article';
import Category from './pages/Category';

function App() {
  return (
    <Switch>
      <Route exact path="/category/create" component={ CreateCategory } />
      <Route exact path="/category/edit" component={ UpdateCategory } />
      <Route exact path="/category/delete" component={ DeleteCategory } />
      <Route exact path="/article/create" component={ CreateArticle } />
      <Route exact path="/article/edit" component={ UpdateArticle } />
      <Route exact path="/article/delete" component={ DeleteArticle } />
      <Route exact path="/article" component={ Article } />
      <Route path="/" component={ Category } />
    </Switch>
  );
}

export default App;
