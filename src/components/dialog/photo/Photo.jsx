import React from 'react';
import styles from './Photo.module.scss';

export default function Photo({ dialogContent }) {
  return (
    <dialog className={styles.photoBlock} open>
      <div className={styles.photo}>{dialogContent}</div>
    </dialog>
  );
}
