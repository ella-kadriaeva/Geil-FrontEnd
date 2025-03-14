import React from 'react';
import styles from './Discount.module.scss';

export default function Discount({ dialogContent, onClick = { handleDialog } }) {
  return (
    <dialog open>
      <div className={styles.discount}>
        <div className={styles.closeBtnWrapper}>
          <button
            className={`button ${styles.closeBtn}`}
            onClick={handleDialog}
          >
            <X className={styles.svgBtn} />
          </button>
        </div>
        <div>
          <h2 className={styles.discount_title}>
            50% discount on product of the day!
          </h2>
          <div className={styles.discount_block}>{dialogContent}</div>
        </div>
      </div>
    </dialog>
  );
}
