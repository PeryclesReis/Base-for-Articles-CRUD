import React, { useEffect, useState } from "react";
import '../styles/category.css';

function Table(props) {
  const [elem, setElem] = useState([]);

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="content">
      <div className='w-75'>
        <table className='w-100 fs-4'>
          <thead>
            <tr>
              <th className='py-5 fs-1'>{props.title}</th>
              <th className='py-5 fs-3 text-end'>icone</th>
            </tr>
          </thead>
          <tbody className='bg-light border border-white shadow'>
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>edition/delete</td>
            </tr>
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>edition/delete</td>
            </tr>
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>edition/delete</td>
            </tr>
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>edition/delete</td>
            </tr>
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>edition/delete</td>
            </tr>
            <tr className=''>
              <td>Categoria</td>
              <td className='text-end'>edition/delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;