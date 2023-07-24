import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import styles from './styles.module.scss'

const titleHeader = cva(styles.base, {
  variants: {
    weight: {
      bold: styles.bold,
      normal: styles.normal,
    },
    size: {
      xSmall: styles['x-small'],
      xxSmall: styles['xx-small'],
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      xLarge: styles['x-large'],
    },
  },
  compoundVariants: [{ weight: 'bold', size: 'xLarge', className: styles['page-header'] }],
  defaultVariants: {
    weight: 'bold',
    size: 'medium',
  },
})

interface TitleHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleHeader> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
  tag: Tag,
  className,
  weight,
  size,
  children,
  ...props
}) => (
  <Tag className={titleHeader({ weight, size, className })} {...props}>
    {children}
  </Tag>
)

export default TitleHeader
