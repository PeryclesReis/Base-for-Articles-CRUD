import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/category.css';

function Category() {
  return (
    <div className='main'>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default Category;
