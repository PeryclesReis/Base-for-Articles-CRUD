import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewCategory from "../components/NewCategory";
import '../styles/category.css';

function CreateCategory() {
  return (
    <div className='main'>
      <Header />
      <NewCategory props="Cadastrar nova Categoria" />
      <Footer />
    </div>
  );
}

export default CreateCategory;