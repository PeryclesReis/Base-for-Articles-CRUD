import React, { useContext } from "react";
import CategoryContext from "../provider/CategoryContext";
import Table from "./Table";

function Categories() {
  const { categories } = useContext(CategoryContext);

  return (
    <Table title='Categorias' params={categories} />
  );
}

export default Categories;
