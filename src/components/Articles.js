import React from 'react'

const Articles = ({title, categoryId, shortDescription, eventDate}) => {
  return (
    <div >
      <div>
        <div>
          <h1>  {categoryId} </h1>
          <h2>  {title}</h2>
          <p>   {shortDescription}</p>
          <p>   {eventDate}</p>
        </div>
      </div>
    </div>
  )
}
export default Articles
