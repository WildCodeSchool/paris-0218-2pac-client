import React from 'react'
import ArticlePreview from './ArticlePreview'
import './Actuality.css'
import { Link } from "@reach/router";

const Actuality = ({ ActuData }) => {
  return (

    <div className="actu-container">
      {ActuData.map(article =>
        <Link to={`/article/${article.id}`}>
            <div className="actuality" style={{ backgroundImage: `url(${article.imageURL})` }} >
              <span category={article.name} className="category">{article.name}</span>
              <ArticlePreview title={article.title} shortDescription={article.shortDescription} />
            </div>
        </Link>
      )}

    </div>

  )
}

export default Actuality
