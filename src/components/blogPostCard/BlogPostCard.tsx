import Paragraph from '@/components/ui/paragraph/Paragraph'
import TitleHeader from '@/components/ui/tilteHeader/TitleHeader'
import { formatDistanceToNow } from 'date-fns'
import plLocale from 'date-fns/locale/pl'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'
import styles from './styles.module.scss'

interface BlogPostCardProps {
  post: {
    title: string
    description: string
    slug: string
    sys: {
      firstPublishedAt: string
    }
    mainImage: {
      image: {
        width: number
        height: number
        secure_url: string
      }[]
    }
  }
  blog: boolean
}

const BlogPostCard = ({ post, blog }: BlogPostCardProps) => {
  const {
    title,
    description,
    slug,
    sys: { firstPublishedAt },
    mainImage,
  } = post
  const { width, height, secure_url: url } = mainImage.image[0]
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {blog ? (
        <article className={`${styles['first-post']} ${styles.card}`}>
          <div className={styles['card-image']}>
            <Image src={url} alt={title} width={width} height={height} />
          </div>
          <div className={styles['card-content']}>
            <TitleHeader tag="h3" weight="bold" size="medium" className={styles['card-title']}>
              {title}
            </TitleHeader>
            <Paragraph size="medium" fontColor="gray" className={styles.description}>
              {description}
            </Paragraph>
            <Paragraph size="small" fontColor="lightGray" className={styles['card-more-info']}>
              <span className={styles.date}>
                {formatDistanceToNow(new Date(firstPublishedAt), {
                  addSuffix: true,
                  locale: plLocale,
                })}
              </span>
              <Link href={`/blog/${slug}`}>
                Read full post
                <BsArrowUpRight className={styles.arrow} />
              </Link>
            </Paragraph>
          </div>
        </article>
      ) : (
        <article className={styles.card}>
          <div className={styles['card-image']}>
            <Image src={url} alt={title} width={width} height={height} />
          </div>
          <TitleHeader tag="h3" weight="normal" size="xxSmall" className={styles['card-title']}>
            {title}
          </TitleHeader>
          <Paragraph size="small" fontColor="lightGray" className={styles['card-more-info']}>
            <span className={styles.date}>
              {formatDistanceToNow(new Date(firstPublishedAt), {
                addSuffix: true,
                locale: plLocale,
              })}
            </span>
            <Link href={`/blog/${slug}`}>
              Read full post
              <BsArrowUpRight className={styles.arrow} />
            </Link>
          </Paragraph>
        </article>
      )}
    </>
  )
}

export default BlogPostCard
