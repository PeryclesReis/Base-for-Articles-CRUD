import React from "react";
import ArticlesTable from "./ArticlesTable";

function Articles(props) {
  return (
    <ArticlesTable title='Artigos' params={props} />
  );
}

export default Articles;
