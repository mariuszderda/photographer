import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import styles from './styles.module.scss'

const titleHeader = cva(styles.base, {
  variants: {
    weight: {
      bold: styles.bold,
      normal: styles.normal,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
      xLarge: styles['x-large'],
    },
  },
  defaultVariants: {
    weight: 'bold',
    size: 'medium',
  },
})

export interface TitleHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleHeader> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const TitleHeader: React.FC<TitleHeaderProps> = ({
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
