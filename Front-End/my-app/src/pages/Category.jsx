import React from "react";
import Categories from "../components/Categories";
import FootBar from "../components/FootBar";
import NavBar from "../components/NavBar";

function Category (props) {
  return (
    <div>
      <NavBar />
      <Categories />
      <FootBar />
    </div>
  );
}

export default Category;
