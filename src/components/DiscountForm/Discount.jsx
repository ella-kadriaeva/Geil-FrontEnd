import React, {useState} from 'react';
import styles from "./Discount.module.scss";
import discountFormBackImg from "../../assets/img/background.png";
import Container from "../container/Container.jsx";
import Form from "../ui/Form.jsx";

const Discount = () => {


  const fields = [
    {name: 'userName', type: 'text', placeholder: 'Name', required: true},
    {name: 'userPhone', type: 'number', placeholder: 'Phone number', required: true},
    {name: 'userEmail', type: 'email', placeholder: 'Email', required: true},
  ]
  const [discountStatus, setDiscountStatus] = useState(false);
  const onFormSubmit = (formData) => {
    setDiscountStatus(true);
  };
  return (
      <Container>
        <div className={styles.discountForm}>
          <div className={styles.discountFormText}>5% off on the first order</div>
          <div className={styles.discountFormInfoWrapper}>
            <div
                className={styles.discountFormBackImg}
                style={{backgroundImage: `url(${discountFormBackImg})`}}
            ></div>
            <Form
                fields={fields}
                title=""
                buttonText="Get Discount"
                onSubmit={onFormSubmit}
                formClass={styles.discountFormInform}
                inputClass={styles.discountFormInputs}
                buttonClass={styles.discountFormButton}
            />

          </div>
        </div>
      </Container>
  );
};

export default Discount;