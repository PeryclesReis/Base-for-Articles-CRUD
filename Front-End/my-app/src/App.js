import React from 'react';
import { Route, Switch } from 'react-router';
import CreateArticle from './pages/CreateArticle';
import CreateCategory from './pages/CreateCategory';
import DeleteArticle from './components/DeleteArticle';
import DeleteCategory from './components/DeleteCategory';
import UpdateArticle from './pages/UpdateArticle';
import UpdateCategory from './pages/UpdateCategory';
import Article from './pages/Article';
import Category from './pages/Category';
import CategoryProvider from './provider/CategoryProvider';
import ArticleProvider from './provider/ArticleProvider';

function App() {
  return (
    <ArticleProvider>
    <CategoryProvider >
      <Switch>
        <Route exact path="/category/create" component={ CreateCategory } />
        <Route exact path="/category/edit/:id" component={ UpdateCategory } />
        <Route exact path="/category/delete/:id" component={ DeleteCategory } />
        <Route exact path="/article/create" component={ CreateArticle } />
        <Route exact path="/article/edit/:category" component={ UpdateArticle } />
        <Route exact path="/article/delete/:category" component={ DeleteArticle } />
        <Route exact path="/article" component={ Article } />
        <Route path="/" component={ Category } />
      </Switch>
    </CategoryProvider>
    </ArticleProvider>
  );
}

export default App;
