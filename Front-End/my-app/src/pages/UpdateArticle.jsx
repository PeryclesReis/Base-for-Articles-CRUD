import React from "react";
import EditArticle from "../components/EditArticle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/category.css';

function UpdateArticle(params) {
  return (
    <div className='main'>
      <Header />
      <EditArticle props="Editar Artigo" params={params}/>
      <Footer />
    </div>
  );
}

export default UpdateArticle;