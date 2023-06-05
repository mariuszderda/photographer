import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import styles from './styles.module.scss'

const paragraph = cva(styles.base, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
    fontColor: {
      navy: styles.navy,
      gray: styles.gray,
      lightGray: styles['light-gray'],
    },
  },
  defaultVariants: {
    fontColor: 'navy',
    size: 'medium',
  },
})

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {}

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  size,
  fontColor,
  children,
  ...props
}) => (
  <p className={paragraph({ fontColor, size, className })} {...props}>
    {children}
  </p>
)
