import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ checked, onChange, name, id }) => {
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      className={styles.checkboxInput}
    />
  );
};

export default Checkbox;
