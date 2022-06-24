import React from 'react';
import { Route, Switch } from 'react-router';
import CreateArticle from './pages/CreateArticle';
import CreateCategory from './pages/CreateCategory';
import UpdateArticle from './pages/UpdateArticle';
import UpdateCategory from './pages/UpdateCategory';
import Article from './pages/Article';
import Category from './pages/Category';
import CategoryProvider from './provider/CategoryProvider';
import ArticleProvider from './provider/ArticleProvider';
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <ArticleProvider>
    <CategoryProvider >
      <Switch>
        <Route exact path="/category/create" component={ CreateCategory } />
        <Route exact path="/category/edit/:id" component={ UpdateCategory } />
        <Route exact path="/article/create" component={ CreateArticle } />
        <Route exact path="/article/edit/:category" component={ UpdateArticle } />
        <Route exact path="/category/:id/articles" component={ Article } />
        <Route exact path="/category/:category/article/details/:id" component={ ArticleDetails } />
        <Route path="/" component={ Category } />
      </Switch>
    </CategoryProvider>
    </ArticleProvider>
  );
}

export default App;
