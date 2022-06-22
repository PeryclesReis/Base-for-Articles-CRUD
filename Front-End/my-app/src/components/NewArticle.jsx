import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ArticleContext from "../provider/ArticleContext";
import '../styles/category.css';

function NewArticle({ props, params }) {
  const { createArticle, updateArticle } = useContext(ArticleContext);
  const [description, setDescription] = useState({});

  const handleClick = async ({ target }) => {
    if (target.id === 'save' && props === 'Editar Artigo') {
      const id = params.match.params.id.split(':')[1];
      await updateArticle({id ,description});
    } else {
      await createArticle({description});
    }
  }

  return (
    <div className="update-categ">
      <h2 className="update-content-title">{props}</h2>
      <div className="update-content">
        <div className="update-content-input">
          <label htmlFor="exampleFormControlInput1" className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control fs-5"
            id="descriptionInput1"
            placeholder="Exemplo: Artigo 1"
            onChange={ ({ target }) => setDescription(target.value) }
          />
          <label htmlFor="exampleFormControlInput2" className="form-label my-3">Categoria</label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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