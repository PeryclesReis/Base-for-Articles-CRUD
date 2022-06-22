import React, { useContext } from "react";
import ArticleContext from "../provider/ArticleContext";
import Table from "./Table";

function Articles() {
  const { articles } = useContext(ArticleContext);

  return (
    <Table title='Artigos' params={ articles } />
  );
}

export default Articles;
