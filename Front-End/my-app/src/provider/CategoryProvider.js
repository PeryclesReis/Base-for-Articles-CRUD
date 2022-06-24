import React from 'react';
import CategoryContext from './CategoryContext';
import axios from 'axios';

const CategoryProvider = ({ children }) => {
  const createCategory = async (data) => {
    axios({
      method: 'post',
      url: 'http://localhost:3004/categories/create',
      data,
    });
  };

  const updateCategory = async (data) => {
    await axios({
      method: 'put',
      url: `http://localhost:3004/categories/update/${data.id}`,
      data,
    });
  };

  const removeCategory = async (data) => {
    await axios({
      method: 'delete',
      url: `http://localhost:3004/categories/remove/${data}`,
    });
  };

  const contextValue = {
    createCategory,
    updateCategory,
    removeCategory,
  };

  return (
    <CategoryContext.Provider value={ contextValue }>
      { children }
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;