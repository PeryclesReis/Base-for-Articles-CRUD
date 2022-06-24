import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";

function ArticleDetails(params) {
  const [data, setData] = useState();

  useEffect(() => {
    const article = params.match.params.id;
    axios.get(`http://localhost:3004/articles/${article}`)
      .then((data) => {
        setData(data.data.result)
      })
      .catch(console.error);
  }, []);

  if (!data) return (<h1>Loading...</h1>);

  return (
    <div className='main w-100'>
      <Header />
      <div className="content-article-details w-75 m-auto">
        <div className="titles-article-details">
          <h1 className="my-5">{data.title}</h1>
          <p className="my-3">
            {data.description}
          </p>
        </div>
        <div>
          <Link to='/'>
              <button
                id="back"
                type="button"
                className="btn btn-back ms-2 px-3"
              >
                Voltar
              </button>
            </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ArticleDetails;
