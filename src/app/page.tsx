import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'
import { fetchGraphQL } from '@/utils/contentful'
import { homePageQuery } from '@/utils/contentfulQuery'

export const revalidate = 300

const Home = async () => {
  const { data } = await fetchGraphQL(homePageQuery)

  if (data.homeCollection.items.lenght < 1) throw new Error('Oops. Ćoś poszło nie tak')

  const { pageName, pageMotto, heroImage, aboutTitle, aboutParagraph, aboutImage } =
    data.homeCollection.items[0]

  return (
    <main>
      <Hero pageName={pageName} pageMotto={pageMotto} heroImage={heroImage} />
      <About aboutTitle={aboutTitle} aboutParagraph={aboutParagraph} aboutImage={aboutImage} />
    </main>
  )
}

export default Home
