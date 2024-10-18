import * as React from 'react'
import Layout from '../components/layout'

const ArticlePost = ({ pageContext }) => {
  return (
    <Layout pageTitle = {pageContext.title}>
      <div>
        <div>
          <img src = {pageContext.image} alt={pageContext.title}/>
          <p>By: {pageContext.author}</p>
          <div dangerouslySetInnerHTML={{ __html: pageContext.body }}/>
        </div>
      </div>
    </Layout>
  )
}

export default ArticlePost