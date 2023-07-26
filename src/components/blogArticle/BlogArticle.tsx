'use client'

import GalleryModal from '@/components/galleryModal/GalleryModal'
import Paragraph from '@/components/ui/paragraph/Paragraph'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Image from 'next/image'
import React, {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useMemo,
  useState,
} from 'react'
import styles from './styles.module.scss'

interface BlogArticleProps {
  title: string
  description: string
  blogArticle: {
    json: Document
    links: {
      entries: {
        block: {
          title: string
          slug: string
          image: {
            secure_url: string
            width: number
            height: number
          }[]
        }[]
      }
    }
  }
  mainImage: {
    title: string
    slug: string
    image: {
      secure_url: string
      width: number
      height: number
    }[]
  }
}

interface LinksInterface {
  entries: {
    block: {
      sys: {
        id: string
      }
      __typename: string
      title: string
      slug: string
      image: {
        secure_url: string
      }[]
    }[]
    inline: {
      sys: {
        id: string
      }
      __typename: string
      title: string
      slug: string
      image: {
        secure_url: string
      }[]
    }[]
  }
}

const BlogArticle = ({ title, description, blogArticle, mainImage }: BlogArticleProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<string | undefined>('')

  // TODO: Improve that section
  const { secure_url: url, width, height } = mainImage.image[0]

  const blogGalleryImages = useMemo(() => {
    const firstImage = {
      url: mainImage.image[0].secure_url,
      title: mainImage.title,
      slug: mainImage.slug,
      width: mainImage.image[0].width,
      height: mainImage.image[0].height,
    }
    const restImages = blogArticle.links.entries.block.map((item) => {
      return {
        url: item.image[0].secure_url,
        title: item.title,
        slug: item.slug,
        width: item.image[0].width,
        height: item.image[0].height,
      }
    })
    return [firstImage, ...restImages]
  }, [mainImage, blogArticle])
  const handleModalOpen = ({ e }: { e: React.MouseEvent<HTMLDivElement, MouseEvent> }) => {
    setCurrentImage(e.currentTarget.dataset?.slug)
    setIsModalOpen((prevState) => !prevState)
  }

  function renderOptions({ links }: { links: LinksInterface }) {
    // create an entry map
    const entryMap = new Map()
    // loop through the block linked entries and add them to the map
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of links.entries.block) {
      entryMap.set(entry.sys.id, entry)
    }

    // loop through the inline linked entries and add them to the map
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of links.entries.inline) {
      entryMap.set(entry.sys.id, entry)
    }
    return {
      // other options...

      renderNode: {
        // eslint-disable-next-line react/no-unstable-nested-components
        [BLOCKS.PARAGRAPH]: (
          _: never,
          children:
            | string
            | number
            | boolean
            | ReactElement<unknown, string | JSXElementConstructor<unknown>>
            | ReactFragment
            | ReactPortal
            | PromiseLikeOfReactNode
            | null
            | undefined
        ) => <Paragraph className={styles.red}>{children}</Paragraph>,
        // other options...
        // eslint-disable-next-line react/no-unstable-nested-components,consistent-return
        // eslint-disable-next-line react/no-unstable-nested-components
        [BLOCKS.EMBEDDED_ENTRY]: (
          node: { data: { target: { sys: { id: string } } } }
          // eslint-disable-next-line consistent-return
        ) => {
          // eslint-disable-next-line no-undef,react/destructuring-assignment
          const entry = entryMap.get(node.data.target.sys.id)
          // eslint-disable-next-line no-underscore-dangle
          if (entry.__typename === 'Images') {
            return (
              <div
                role="presentation"
                data-slug={entry.slug}
                onClick={(e) => handleModalOpen({ e })}
              >
                <Image
                  src={entry.image[0].secure_url}
                  width={entry.image[0].width}
                  height={entry.image[0].height}
                  alt={entry.title}
                  data-slug={entry.slug}
                />
              </div>
            )
          }
        },
      },
    }
  }

  return (
    <>
      <TitleHeader tag="h1" size="large" weight="bold" className={styles.title}>
        {title}
      </TitleHeader>
      <Paragraph fontColor="lightGray" className={styles.description}>
        {description}
      </Paragraph>
      <div
        role="presentation"
        className={styles['image-container']}
        data-slug={mainImage.slug}
        onClick={(e) => handleModalOpen({ e })}
      >
        {' '}
        <Image
          src={url}
          width={width}
          height={height}
          alt="lala"
          className={styles['main-image']}
        />{' '}
      </div>
      <div className={styles.post}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {documentToReactComponents(blogArticle.json, renderOptions({ links: blogArticle.links }))}
      </div>
      {isModalOpen && (
        <GalleryModal
          handleOpen={() => setIsModalOpen(false)}
          currentImage={currentImage}
          images={blogGalleryImages}
        />
      )}
    </>
  )
}

export default BlogArticle
