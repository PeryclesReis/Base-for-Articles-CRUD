import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewCategory from "../components/NewCategory";
import '../styles/category.css';

function UpdateCategory(params) {
  return (
    <div className='main'>
      <Header />
      <NewCategory props="Editar Categoria" params={params}/>
      <Footer />
    </div>
  );
}

export default UpdateCategory;