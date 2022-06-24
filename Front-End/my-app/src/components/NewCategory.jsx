import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CategoryContext from "../provider/CategoryContext";
import '../styles/category.css';

function NewCategory({ props, params }) {
  const { createCategory, updateCategory } = useContext(CategoryContext);
  const [description, setDescription] = useState({});

  const handleClick = async ({ target }) => {
    if (target.id === 'save' && props === 'Editar Categoria') {
      const id = params.match.params.id;
      await updateCategory({id ,description});
    } else {
      await createCategory({description});
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
            placeholder="Exemplo: Categoria 1"
            onChange={ ({ target }) => setDescription(target.value) }
          />
        </div>
        <div className="update-content-btn">
          <Link to='/'>
            <button
              id="back"
              type="button"
              className="btn btn-back me-2 px-3"
            >
              Voltar
            </button>
          </Link>
          <Link to="/">
            <button
              id="save"
              type="button"
              className="btn btn-save ms-2 px-3"
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

export default NewCategory;