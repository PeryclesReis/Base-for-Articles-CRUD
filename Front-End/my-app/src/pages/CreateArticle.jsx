import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewArticle from "../components/NewArticle";
import '../styles/category.css';

function CreateArticle() {
  return (
    <div className='main'>
      <Header />
      <NewArticle props="Cadastrar novo Artigo" />
      <Footer />
    </div>
  );
}

export default CreateArticle;