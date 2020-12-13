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
        switch (node.slug) {
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
          case "contact":
                  createPage({
                    path: "contact",
                    component: path.resolve(`./src/templates/contact.js`),
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
          case "homeowner-referral":
                    createPage({
                      path: "homeowner-referral",
                      component: path.resolve(`./src/templates/homeowner-referral.js`),
                      context: {
                        slug: node.slug,
                        databaseId: node.databaseId,
                      },
                    })
              break;
          case "contractor-referral":
                    createPage({
                      path: "contractor-referral",
                      component: path.resolve(`./src/templates/contractor-referral.js`),
                      context: {
                        slug: node.slug,
                        databaseId: node.databaseId,
                      },
                    })
              break;
          case "terms-of-use":
                  createPage({
                    path: "terms-of-use",
                    component: path.resolve(`./src/templates/terms-of-use.js`),
                    context: {
                      slug: node.slug,
                      databaseId: node.databaseId,
                    },
                  })
              break;
          case "text-to-pay-feature":
              createPage({
                path: "text-to-pay-feature",
                component: path.resolve(`./src/templates/text-to-pay-feature.js`), 
                context: {
                  slug: node.slug,
                  databaseId: node.databaseId,
                },
              })
              break;
          case "referral-terms":
                  createPage({
                    path: "referral-terms",
                    component: path.resolve(`./src/templates/referral-terms.js`),
                    context: {
                      slug: node.slug,
                      databaseId: node.databaseId,
                    },
                  })
              break;
          case "referral-program-details":
                  createPage({
                    path: "referral-program-details",
                    component: path.resolve(`./src/templates/referral-program-details.js`),
                    context: {
                      slug: node.slug,
                      databaseId: node.databaseId,
                    },
                  })
              break;
          case "events":
                  createPage({
                    path: "events",
                    component: path.resolve(`./src/templates/events.js`),
                    context: {
                      slug: node.slug,
                      databaseId: node.databaseId,
                    },
                  })
              break;
          case "privacy-policy":
                  createPage({
                    path: "privacy-policy",
                    component: path.resolve(`./src/templates/privacy-policy.js`),
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
        }
        
        createPage({
          path: "blog",
          component: path.resolve(`./src/templates/blog-list.js`), 
          context: {
            slug: node.slug,
            databaseId: node.databaseId,
          },
        })
      
        createPage({
          path: "feedback",
          component: path.resolve(`./src/templates/feedback.js`),
        })

        createPage({
          path: "contact-us",
          component: path.resolve(`./src/templates/lead.js`),
        })

        createPage({
          path: "payment-estimator",
          component: path.resolve(`./src/templates/payment-estimator.js`),
        })

        createPage({
          path: "do-not-sell-my-info",
          component: path.resolve(`./src/templates/doNotSellMyInfo.js`),
        })

        createPage({
          path: "refferal-thank-you",
          component: path.resolve(`./src/templates/refferal-thank-you.js`),
        })
  });

  /** Create Blog Posts **/
  const blogPostResults = await graphql(`
    query GET_POSTS {
        wpgraphql {
            posts(first: 1000) {
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

  // console.log(blogPostResults.data.wpgraphql.posts)

  blogPostResults.data.wpgraphql.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.slug,
        databaseId: node.databaseId,
      },
    })
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

  /**  query for WordPress posts  */
  const postResults = await graphql(`
    query GET_POSTS {
      wpgraphql {
        posts {
          edges {
            node {
              databaseId
              id
              slug
              title
              date
              content(format: RENDERED)
            }
          }
        }
      }
    }
  `);

  // postResults.data.wpgraphql.posts.edges.forEach(({ node }) => {
  //     createPage({
  //       path: node.id,
  //       component: path.resolve(`./src/components/partnerPortal.js`),
  //       context: {
  //         slug: node.slug,
  //         Id: node.id,
  //       },
  //     })
  //     { switch (node.id) {
            // case "cG9zdDoxMjE3":
            //       createPage({
            //         path: "loan-programs",
            //         component: path.resolve(`./src/templates/appMethod.js`),
            //         context: {
            //           slug: node.slug,
            //           id: node.id,
            //         },
            //       })
            //   break;
            // case "cG9zdDoxMjIy":
            //       createPage({
            //         path: "loan-programs",
            //         component: path.resolve(`./src/templates/dealerResource.js`),
            //         context: {
            //           slug: node.slug,
            //           databaseId: node.databaseId,
            //         },
            //       })
            //   break;
            // case "cG9zdDoxMjIw":
            //       createPage({
            //         path: node.id,
            //         component: path.resolve(`./src/components/partnerPortal.js`),
            //         context: {
            //           slug: node.slug,
            //           Id: node.id,
            //         },
            //       })
            //   break;
            // default:
              // break;
      // }}
  // });
}
// exports.onCreatePage = ({page}) => {
//   console.log(page)
//   if(page.path.startsWith('/404')){
//     page.layout = '404.index';
//   }
// }