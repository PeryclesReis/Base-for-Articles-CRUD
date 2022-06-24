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
    <div className='main'>
      <Header />
      <div className="">
        <h1>{data.title}</h1>
        <p>
          {data.description}
        </p>
        <Link to='/'>
            <button
              id="back"
              type="button"
              className="btn btn-secondary me-2 px-3"
            >
              Voltar
            </button>
          </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ArticleDetails;
