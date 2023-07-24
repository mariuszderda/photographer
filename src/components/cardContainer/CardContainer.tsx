import styles from './styles.module.scss'

interface CardContainerProps {
  children: React.ReactNode
}

const CardContainer = ({ children }: CardContainerProps) => {
  return <section className={styles.container}>{children}</section>
}

export default CardContainer
