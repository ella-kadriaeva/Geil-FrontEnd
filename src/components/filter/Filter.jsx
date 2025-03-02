import React, { useState } from "react";
import Checkbox from "../ui/checkbox/Checkbox";
import styles from "./Filter.module.scss";
import Select from "../select/Select";
import Input from "../ui/input/Input";
import Container from "../container/Container";

export default function Filter() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    isDiscounted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData({
      ...formData,
      isDiscounted: checked
    });
  };
  return (
    <Container>
      <form className={styles.formContainer}>
        <div className={styles.container}>
          <label htmlFor={"from"} className={styles.label}>
            Price
          </label>
          <Input
            name="from"
            id="from"
            value={formData.from}
            onChange={handleChange}
            placeholder="from"
          />
          <Input
            name="to"
            id="to"
            value={formData.to}
            onChange={handleChange}
            placeholder="to"
          />
        </div>
        <div className={styles.container}>
          <label htmlFor={"isDiscounted"} className={styles.label}>
            Discounted items
          </label>

          <Checkbox
            name="isDiscounted"
            id="isDiscounted"
            checked={formData.isDiscounted}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className={styles.container}>
          <label htmlFor={""} className={styles.label}>
            Selected
          </label>
          <Select />
        </div>
      </form>
    </Container>
  );
}
