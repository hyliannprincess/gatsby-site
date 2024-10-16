import * as React from 'react'
import Layout from '../components/layout'

const ArticlePost = ({ pageContext }) => {
  const difficulty = pageContext.difficulty.charAt(0).toUpperCase() + pageContext.difficulty.slice(1);
  return (
    <Layout pageTitle = {pageContext.title}>
      <div>
        <div>
          <img src = {pageContext.image} alt={pageContext.title}/>
          <p>By: {pageContext.author}</p>
          <div dangerouslySetInnerHTML={{ __html: pageContext.summary }}/>
          <p>Servings: {pageContext.numberOfServings}</p>
          <p>Difficulty: {difficulty}</p>
          <p>Prep Time: {pageContext.preparationTime} Minutes</p>
          <p>Cooking Time: {pageContext.cookingTime} Minutes</p>
          <h3>Ingredients: </h3>
          <ul>
            {pageContext.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions: </h2>
          <div dangerouslySetInnerHTML={{ __html: pageContext.instructions }}/>
        </div>
      </div>
    </Layout>
  )
}

export default ArticlePost