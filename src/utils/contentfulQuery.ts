export const homePageQuery = `
    query {
      homeCollection {
        items {
          pageName
          pageMotto
          heroImage
          aboutTitle
          aboutParagraph {
            json
          }
          aboutImage
        }
      }
    }
  `
export const galleryCollectionQuery = `
      query {
        galleryCollection {
          items {
            galleryTitle,
            mainImage {
              image
            }
            slug
          }
        }
      }
    `

export const galleryItem = `
   query getGalleryBySlug ($slug: String!) {
      galleryCollection(where: { slug: $slug }) {
        items {
          galleryTitle
          mainImage {
            image
            title
            slug
          }
          galleryImagesCollection {
            items {
              image
              title
              slug
            }
          }
        }
      }
    }
  `

export const blogCollectionQuery = `
  query {
    blogCollection {
      items {
        sys {
          firstPublishedAt
        }
        title
        description
        slug
        mainImage {
          image
        }
      }
    }
  }
`

export const blogArticleQuery = `
  query getArticleBySlug ($slug: String!)  {
    blogCollection (limit: 10, where: {slug: $slug}) {
      items {
        title,
        description,
        mainImage {
          title,
          image,
          slug
        }
        blogArticle {
          json
          links {            
            entries {
              block {
                sys{
                  id
                }
                __typename
                ... on Images {
                  title
                  slug
                  image
                }
              }
              inline {
                sys{
                  id
                }
                __typename
                ... on Images {
                  title
                  slug
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`
