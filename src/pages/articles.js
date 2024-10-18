import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ArticlesPage = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      {
        data.Drupal.nodeArticles.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.path}`.slice(3)}>
                {node.title}
              </Link>
            </h2>
            <p>By: {node.author.displayName}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
    query {
        Drupal {
            nodeArticles(first: 10) {
                nodes {
                    id
                    title
                    path
                    author {
                      displayName
                    }
                }
            }
        }
    }
`

export const Head = () => <Seo title="Articles" />

export default ArticlesPage