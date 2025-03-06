import styles from './SectionTitle.module.scss';

export default function SectionTitle({ children }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}
