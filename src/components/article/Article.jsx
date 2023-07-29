import React from "react";
import "./article.css";

function Article({ imageURL, date, title }) {
  return (
    <div className="gpt3__blog-container__article ">
      <div className="gpt3__blog-container__article-image">
        <img src={imageURL} alt="blog" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
