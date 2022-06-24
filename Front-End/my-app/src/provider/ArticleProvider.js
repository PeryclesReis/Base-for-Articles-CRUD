import React from 'react';
import ArticleContext from './ArticleContext';
import axios from 'axios';

const ArticleProvider = ({ children }) => {
  const createArticle = async (data) => {
    axios({
      method: 'post',
      url: `http://localhost:3004/articles/create/${data.id}`,
      data,
    });
  };

  const getArticle = async (data) => {
    axios({
      method: 'post',
      url: `http://localhost:3004/articles/${data.id}`,
      data,
    });
  };

  const updateArticle = async (data) => {
    await axios({
      method: 'put',
      url: `http://localhost:3004/articles/update/${data.id}`,
      data,
    });
  };

  const removeArticle = async (data) => {
    await axios({
      method: 'delete',
      url: `http://localhost:3004/articles/remove/${data}`,
    });
  };

  const contextValue = {
    getArticle,
    createArticle,
    updateArticle,
    removeArticle,
  };

  return (
    <ArticleContext.Provider value={ contextValue }>
      { children }
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;