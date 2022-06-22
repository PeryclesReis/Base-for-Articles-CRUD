import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewArticle from "../components/NewArticle";
import '../styles/category.css';

function UpdateArticle(params) {
  return (
    <div className='main'>
      <Header />
      <NewArticle props="Editar Artigo" params={params}/>
      <Footer />
    </div>
  );
}

export default UpdateArticle;