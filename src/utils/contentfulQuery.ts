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
