import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ButtonLink from '../ui/ButtonLink';
import styles from './mainSectionTitle.module.scss';
export default function MainSectionTitle({ title, to, linkText }) {
  return (
    <div className={`${styles.section_titleBlock}`}>
      <SectionTitle>{title}</SectionTitle>
      <span className={styles.section_titleLine}></span>
      <ButtonLink
        to={to}
        linkText={linkText}
        className={`${styles.section_button__outlined} ${styles.section_button__outlined_inTitle}`}
      />
    </div>
  );
}
