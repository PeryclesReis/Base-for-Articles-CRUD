import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import ArticleContext from "../provider/ArticleContext";
import '../styles/category.css';

function NewArticle({ props }) {
  const { createArticle } = useContext(ArticleContext);
  const [categories, serCategories] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3004/categories`)
      .then((data) => {
        serCategories(data.data.result)
      })
      .catch(console.error);
  }, []);

  const handleClick = async ({ target }) => {
    if (target.id === 'save') {
      await createArticle({id: categoryId, title, description});
    }
  }

  const handleChange = ({ target: { value } }) => {
    setCategoryId(value);
  };

  return (
    <div className="update-categ">
      <h2 className="update-content-title">{props}</h2>
      <div className="update-content">
        <div className="update-content-input">
          <label htmlFor="exampleFormControlInput1" className="form-label">Título</label>
          <input
            type="text"
            className="form-control fs-5"
            id="descriptionInput1"
            placeholder="Exemplo: Artigo 1"
            onChange={ ({ target }) => setTitle(target.value) }
          />
          <div className="my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrição</label>
            <textarea className="form-control" rows="5" onChange={ ({ target }) => setDescription(target.value) }></textarea>
          </div>
          <label htmlFor="exampleFormControlInput2" className="form-label">Categoria</label>
          <select className="form-select" onChange={ handleChange }>
            <option value="select">Selecione uma categoria</option>
            {categories.map((elem) =>
              <option key={elem.id} value={elem.id}>{elem.description}</option>
            )}
          </select>
        </div>
        <div className="update-content-btn">
          <Link to='/article'>
            <button
              id="back"
              type="button"
              className="btn btn-secondary me-2 px-3"
            >
              Voltar
            </button>
          </Link>
          <Link to="/article">
            <button
              id="save"
              type="button"
              className="btn btn-primary ms-2 px-3"
              onClick={ handleClick }
            >
              Salvar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewArticle;