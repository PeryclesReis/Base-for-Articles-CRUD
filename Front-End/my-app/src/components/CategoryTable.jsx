import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from "react-router-dom";
import CategoryContext from "../provider/CategoryContext";
import '../styles/category.css';

function Table({ title }) {
  const { removeCategory } = useContext(CategoryContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/categories')
      .then((data) => {
        setData(data.data.result)
      })
      .catch(console.error);
  }, []);

  const handleClick = async ({target}) => {
    await removeCategory(target.parentNode.id);
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
                <Link to='/category/create'>
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
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/category/${elem.id}/articles`}>
                      { elem.description }
                    </Link>
                  </td>
                  <td className='text-end'>
                    <Link to={`/category/edit/:${elem.id}`}>
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