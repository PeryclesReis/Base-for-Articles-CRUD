import React, { useEffect, useState } from 'react';
import CategoryContext from './CategoryContext';
import axios from 'axios';

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getProductsFromAPI = async () => {
    const { data } = await axios({
      method: 'get',
      url: 'http://localhost:3004/categories',
    });
    setCategories(data.result);
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  const createCategory = async (data) => {
    console.log(data);
    axios({
      method: 'post',
      url: 'http://localhost:3004/categories/create',
      data,
    });
  };

  const updateCategory = async (data) => {
    console.log(data);
    await axios({
      method: 'put',
      url: `http://localhost:3004/categories/update/${data.id}`,
      data,
    });
  };

  const removeCategory = async (data) => {
    console.log(data);
    await axios({
      method: 'delete',
      url: `http://localhost:3004/categories/remove/${data}`,
    });
  };

  const contextValue = {
    categories,
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