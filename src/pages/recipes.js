import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const RecipesPage = ({ data }) => {
  return (
    <Layout pageTitle="Recipes">
      {
        data.Drupal.nodeRecipes.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.path}`.slice(3)}>
                {node.title}
              </Link>
            </h2>
            <p>Prep Time: {node.preparationTime} Minutes</p>
            <p>Cook Time: {node.cookingTime} Minutes</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
    query {
        Drupal {
            nodeRecipes(first: 10) {
                nodes {
                    id
                    title
                    path
                    preparationTime
                    cookingTime
                }
            }
        }
    }
`

export const Head = () => <Seo title="Recipes" />

export default RecipesPage