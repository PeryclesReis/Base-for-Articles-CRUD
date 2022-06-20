import React from "react";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Article(params) {
  return (
    <div className='main'>
      <Header />
      <Articles />
      <Footer />
    </div>
  );
}

export default Article;
