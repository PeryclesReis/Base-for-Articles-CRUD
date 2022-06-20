import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import '../styles/category.css';
import { Link } from "react-router-dom";

function Table({ title }) {
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
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>
                <Link to='/category/edit'>
                  <FontAwesomeIcon
                    className='edit'
                    icon={ faPenSquare }
                  />
                </Link>
                <Link to='/category/delete'>
                  <FontAwesomeIcon
                    className='edit'
                    icon={ faTrash }
                  />
                </Link>
              </td>
            </tr>
            <tr className=''>
              <td>Categoria2</td>
              <td className='text-end'>
                <FontAwesomeIcon
                  className='edit'
                  icon={ faPenSquare }
                />
                <FontAwesomeIcon
                  className='edit'
                  icon={ faTrash }
                />
              </td>
            </tr>
            <tr className=''>
              <td>Categoria3</td>
              <td className='text-end'>
                <FontAwesomeIcon
                  className='edit'
                  icon={ faPenSquare }
                />
                <FontAwesomeIcon
                  className='edit'
                  icon={ faTrash }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;