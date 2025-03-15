import React, {useState} from 'react';
import {ShieldX} from 'lucide-react';
import {useForm} from 'react-hook-form';
import styles from './Form.module.scss';
import Congratulations from "../dialog/congratulations/Congratulations.jsx";

export default function Form({type}) {

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');


  const [successMessage, setSuccessMessage] = useState('');
  const stylesForm = type === 'discount' ? styles.discount : styles.order;
  const text = type === 'discount' ? 'GetDiscount' : 'Order';
  const {
    register, handleSubmit, watch, formState: {errors}, onError,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted', data);

    console.log('The discount has been successfully sent by email', data);
    setSuccessMessage('The discount has been successfully sent by email');

    setIsDialogOpen(true)
  };
  console.log(watch('Email'));

  return (

      <>
        <form onSubmit={handleSubmit(onSubmit, onError)} className={stylesForm}>
          <input
              className={styles.form_inputs}
              placeholder="Name"
              type="text"
              {...register('name', {
                required: 'Please, type your name!', minLength: {
                  value: 3, message: 'Too short!',
                }, maxLength: {
                  value: 12, message: 'Too long!',
                },
              })}
          />
          <input
              className={styles.form_inputs}
              placeholder="Phone number"
              type="tel"
              {...register('phone', {
                required: 'Please, type your phone!', pattern: {
                  value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/i, message: 'Invalid phone number format.',
                },
              })}
          />

          <input
              className={styles.form_inputs}
              placeholder="Email"
              type="email"
              {...register('email', {
                required: 'Please, enter your email!', pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              })}
          />
          {errors.name && (<p className={styles.error}>
            <ShieldX size={20} className={styles.error_icon}/>
            Wrong input.
            {errors.name.message}
          </p>)}
          {errors.phone && (<p className={styles.error}>
            <ShieldX size={20} className={styles.error_icon}/>
            Wrong input.
            {errors.phone.message}
          </p>)}
          {errors.email && (<p className={styles.error}>
            <ShieldX size={20} className={styles.error_icon}/>
            Wrong input.
            {errors.email.message}
          </p>)}

          {successMessage && <p className={styles.success}>{successMessage}</p>}

          <button className={styles.form_button}>{text}</button>
        </form>

        {isDialogOpen &&
            (<Congratulations
                dialogContent={dialogContent}
                handleDialog={() => setIsDialogOpen(false)}
            />)}
      </>


  );
}
