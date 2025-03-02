import React from "react";
import styles from "./Input.module.scss";
const Input = ({ value, onChange, placeholder, name, id }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      className={styles.inputField}
    />
  );
};

export default Input;
