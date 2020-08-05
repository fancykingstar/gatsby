const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;  

  /**  Create Pages  */
  const pageResults = await graphql(`
    query GET_PAGES {
      wpgraphql {
        pages(first: 1000, after: null) {
          edges {
            node {
              databaseId
              slug
              title
              date
              content(format: RENDERED)
              featuredImage {
                altText
                link
                mediaItemUrl
                uri
              }
            }
          }
        }
      }
    }
  `);

  pageResults.data.wpgraphql.pages.edges.forEach(({ node }) => {
      { switch (node.slug) {
          case "homeowner":
                createPage({
                  path: "homeowner",
                  component: path.resolve(`./src/templates/homeowner.js`),
                  context: {
                    slug: node.slug,
                    databaseId: node.databaseId,
                  },
                })
            break;
          case "loan-programs":
                createPage({
                  path: "loan-programs",
                  component: path.resolve(`./src/templates/loan-programs.js`),
                  context: {
                    slug: node.slug,
                    databaseId: node.databaseId,
                  },
                })
            break;
          case "loan-types":
                createPage({
                  path: "loan-types",
                  component: path.resolve(`./src/templates/loan-types.js`),
                  context: {
                    slug: node.slug,
                    databaseId: node.databaseId,
                  },
                })
            break;
          case "about":
                  createPage({
                    path: "about",
                    component: path.resolve(`./src/templates/about.js`),
                    context: {
                      slug: node.slug,
                      databaseId: node.databaseId,
                    },
                  })
              break;
          case "careers":
                    createPage({
                      path: "careers",
                      component: path.resolve(`./src/templates/careers.js`),
                      context: {
                        slug: node.slug,
                        databaseId: node.databaseId,
                      },
                    })
              break;
          default:
                createPage({
                  path: node.slug,
                  component: path.resolve(`./src/templates/page-template.js`),
                  context: {
                    slug: node.slug,
                    databaseId: node.databaseId,
                  },
                })
            break;
      }}
  });
  
  
  /**  Create Category Pages  */
  const categoryPageResults = await graphql(`
    query GET_CATEGORY_PAGES {
      wpgraphql {
        categories(first: 1000) {
          edges {
            node {
              databaseId
              name
              slug
            }
          }
        }
      }
    }
  `);

  categoryPageResults.data.wpgraphql.categories.edges.forEach(({ node }) => {
    createPage({
      path: `/category/${node.slug}`,
      component: path.resolve(`./src/templates/category-page-template.js`),
      context: {
        slug: node.slug,
        databaseId: node.databaseId,
        name: node.name
      },
    })
  });  

}