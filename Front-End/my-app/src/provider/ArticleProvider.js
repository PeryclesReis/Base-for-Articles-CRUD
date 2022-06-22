import React, { useEffect, useState } from 'react';
import ArticleContext from './ArticleContext';
import axios from 'axios';

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    const { data } = await axios({
      method: 'get',
      url: 'http://localhost:3004/articles/list',
    });
    setArticles(data.result);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const createArticle = async (data) => {
    console.log(data);
    axios({
      method: 'post',
      url: `http://localhost:3004/articles/create/${data.id}`,
      data,
    });
  };

  const updateArticle = async (data) => {
    console.log(data);
    await axios({
      method: 'put',
      url: `http://localhost:3004/articles/update/${data.id}`,
      data,
    });
  };

  const removeArticle = async (data) => {
    console.log(data);
    await axios({
      method: 'delete',
      url: `http://localhost:3004/articles/remove/${data}`,
    });
  };

  const contextValue = {
    articles,
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