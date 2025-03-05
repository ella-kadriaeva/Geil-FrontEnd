import React, {useEffect, useState} from 'react';

const Form = ({
                fields = [],
                title = 'Form',
                buttonText = 'Submit',
                onSubmit,
                formClass = '',
                inputClass = '',
                buttonClass = ''
              }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(fields.reduce((acc, field) => ({...acc, [field.name]: ''}), {}));
  }, [fields]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}));
  };

  const resetForm = () => {
    setFormData(fields.reduce((acc, field) => ({...acc, [field.name]: ''}), {}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      try {
        onSubmit(formData);
        resetForm();
      } catch (error) {
        console.error("Ошибка отправки формы: ", error);
      }
    }
  };

  return (

      <form onSubmit={handleSubmit} className={formClass}>
        <fieldset>
          {fields.map((field, index) => (
              <div key={field.name || index} className="form-group">
                <input
                    id={field.name}
                    type={field.type || 'text'}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required={field.required ? true : undefined}
                    className={inputClass}
                />
              </div>
          ))}
        </fieldset>
        <div className="button-container">
          <button type="submit" className={buttonClass}>{buttonText}</button>
        </div>
      </form>


  );
};

export default Form;