import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from "react-router-dom";
import ArticleContext from "../provider/ArticleContext";
import '../styles/category.css';

function Table({ title, params: { params } }) {
  const { removeArticle } = useContext(ArticleContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const category = params.match.params.id;
    axios.get(`http://localhost:3004/articles/category/${category}`)
      .then((data) => {
        setData(data.data.result)
      })
      .catch(console.error);
  }, []);

  const handleClick = async ({target}) => {
    await removeArticle(target.parentNode.id);
    window.location.reload(true);
  }

  return (
    <div className="content">
      <div className='w-75'>
        <table className='w-100 fs-4'>
          <thead>
            <tr>
              <th className='py-5 fs-1'>{title}</th>
              <th className='py-5 fs-3 text-end'>
                <Link to='/article/create'>
                  <FontAwesomeIcon
                    className='register'
                    icon={ faPlusCircle }
                  />
                </Link>
              </th>
            </tr>
          </thead>
          <tbody className='bg-light border border-white shadow'>
            { data.map((elem, index) => {
              const category = params.match.params.id;
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/category/${category}/article/details/${elem.id}`}>
                      { elem.title }
                    </Link>
                  </td>
                  <td className='text-end'>
                    <Link to={`/article/edit/:${elem.id}`}>
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
        <Link to='/'>
          <button
            id="back"
            type="button"
            className="btn btn-secondary mt-4 px-5 py-2"
          >
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Table;