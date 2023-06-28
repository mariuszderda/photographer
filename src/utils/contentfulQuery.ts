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
          }
          galleryImagesCollection {
            items {
              image 
            }
          }
        }
      }
    }
  `
