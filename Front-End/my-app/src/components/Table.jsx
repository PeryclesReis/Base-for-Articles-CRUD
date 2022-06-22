import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import CategoryContext from "../provider/CategoryContext";
import ArticleContext from "../provider/ArticleContext";
import '../styles/category.css';

function Table({ title, params }) {
  const { removeCategory } = useContext(CategoryContext);
  const { removeArticle } = useContext(ArticleContext);

  const handleClick = async ({target}) => {
    if (title === 'Categorias') {
      await removeCategory(target.parentNode.id);
    } else if (title === 'Artigos') {
      await removeArticle(target.parentNode.id);
    }
  }

  return (
    <div className="content">
      <div className='w-75'>
        <table className='w-100 fs-4'>
          <thead>
            <tr>
              <th className='py-5 fs-1'>{title}</th>
              <th className='py-5 fs-3 text-end'>
                <Link to={`/${title === 'Categorias' ? 'category' : 'article'}/create`}>
                  <FontAwesomeIcon
                    className='register'
                    icon={ faPlusCircle }
                  />
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className='bg-light border border-white shadow'>
            { params.map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{ elem.description }</td>
                  <td className='text-end'>
                    <Link to={`/${title === 'Categorias' ? 'category' : 'article'}/edit/:${elem.id}`}>
                      <FontAwesomeIcon
                        className='edit btn'
                        icon={ faPenSquare }
                      />
                    </Link>
                    <button
                      type="submit"
                      className="btn p-0"
                      onClick={ handleClick }
                    >
                      <FontAwesomeIcon id={elem.id} className='edit bnt' icon={ faTrash } />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;