import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./article-content";

const ArticlesList = () => (
  <>
    <h1>Articles</h1>
    {articleContent.map((item, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${item.name}`}
      >
        <h3>{item.title}</h3>
        <p>{item.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
