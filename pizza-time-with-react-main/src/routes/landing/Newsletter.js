import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import validateForm from "../../components/validateForm";

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("newsletter");
  return (
    <section className="email-subscribtion">
      <motion.div
        className="email-label"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <label htmlFor="email-input">
          Menü hakkındaki güncellemeleri almak için bültenimize abone olun ve
          keyfini çıkarın harika hediyeler!
        </label>
      </motion.div>
      {submit && Object.keys(formError).length === 0 ? (
        <p className="newsletter-success">
          Haber bültenimize başarıyla abone oldunuz!
        </p>
      ) : (
        <motion.div
          className="input-section"
          initial={{ opacity: 0, translateX: 300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="webflow-style-input">
              <input
                name="email"
                onChange={handleValidation}
                value={formValue.email}
                className="input-field"
                placeholder="E-posta adresiniz nedir?"
              />
            </div>
            <span className="fullname-error-cpage">{formError.email}</span>
            <button type="submit" className="active-button-style">
              Beni de kaydet.
            </button>
          </form>
        </motion.div>
      )}
    </section>
  );
};

export default Newsletter;
