const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const recipePostTemplate = path.resolve(`src/templates/recipePost.js`)
    const recipe = await graphql(`
        query {
            Drupal {
                nodeRecipes(first: 10) {
                    edges {
                        node {
                            title
                            id
                            path
                            cookingTime
                            preparationTime
                            numberOfServings
                            ingredients
                            difficulty
                            author {
                                displayName
                            }
                            recipeInstruction{
                                processed
                            }
                            summary{
                                processed
                            }
                            mediaImage{
                                mediaImage{
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const articlePostTemplate = path.resolve(`src/templates/articlePost.js`)
    const article = await graphql(`
        query {
            Drupal {
                nodeArticles(first: 10) {
                    edges {
                        node {
                            author {
                                displayName
                            }
                            mediaImage {
                                mediaImage {
                                    url
                                }
                            }
                            path
                            body {
                                processed
                            }
                            title
                            id
                        }
                    } 
                }       
            }        
            
        }
    `)
    recipe.data.Drupal.nodeRecipes.edges.forEach(element => {
        const recipePath = `${element.node.path}`.slice(3);
        createPage({
            path: recipePath,
            component: recipePostTemplate,
            context: {
              title: element.node.title,
              id: element.node.id,
              image: element.node.mediaImage.mediaImage.url,
              numberOfServings: element.node.numberOfServings,
              
              preparationTime: element.node.preparationTime,
              cookingTime: element.node.cookingTime,
              ingredients: element.node.ingredients,
              difficulty: element.node.difficulty,
              instructions: element.node.recipeInstruction.processed,
              summary: element.node.summary.processed,
              author: element.node.author.displayName,
            },
        })
    });

    article.data.Drupal.nodeArticles.edges.forEach(element => {
        const articlePath = `${element.node.path}`.slice(3);
        createPage({
            path: articlePath,
            component: articlePostTemplate,
            context: {
              title: element.node.title,
              id: element.node.id,
              image: element.node.mediaImage.mediaImage.url,
              author: element.node.author.displayName,
              body: element.node.body.processed,
              
            },
        })
    });

    
}
