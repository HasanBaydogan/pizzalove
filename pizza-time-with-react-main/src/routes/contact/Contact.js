import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
//components
import validateForm from "../../components/validateForm";
import ResetLocation from "../../helpers/ResetLocation";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const validate = validateForm("contact");
  const captchaRef = useRef();
  useEffect(() => {
    document.title = "Contact | Pizza Time";
  }, []);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      setSubmit(false);
      return;
    } else {
      let captchaToken = captchaRef.current?.getValue();
      if (captchaToken.length === 0) {
        setCaptchaError("reCaptcha is mandatory");
        setLoading(false);
        setSubmit(false);
        return;
      }
      const verification = await verifyCaptcha(captchaToken);
      captchaRef.current?.reset();
      if (verification) {
        setLoading(false);
        setSubmit(true);
        ResetLocation();
        setFormValue({ fullname: "", email: "", message: "" });
        setCaptchaError("");
      } else {
        ResetLocation();
        setLoading(false);
        setSubmit(false);
        setFormValue({ fullname: "", email: "", message: "" });
        setCaptchaError("");
      }
    }
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const verifyCaptcha = async (captchaToken) => {
    try {
      const response = await fetch(process.env.REACT_APP_CAPTCHA_URL, {
        method: "POST",
        body: JSON.stringify({
          secret: process.env.REACT_APP_CAPTCHA_SECRET,
          captchaToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Could not verify captcha!", error.message);
      return false;
    }
  };
  return (
    <motion.main
      className="contact"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      {loading ? (
        <section className="contact-loader">
          <p>Neredeyse geldik...</p>
          <img
            alt="Processing request"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </section>
      ) : submit && Object.keys(formError).length === 0 ? (
        <section className="contact-success">
          <p>Mesajınızı aldık ve kısa süre içinde size geri döneceğiz! 🍕</p>
          <section>
            <Link className="active-button-style" to="/menu">
              Menüye git
            </Link>
            <button
              className="passive-button-style"
              type="button"
              onClick={() => {
                setSubmit(false);
              }}
            >
              Tekrar gönder
            </button>
          </section>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="flex-container flex-column">
          <div className="webflow-style-input">
            <input
              onChange={handleValidation}
              value={formValue.fullname}
              name="fullname"
              className="pop-font"
              type="text"
              placeholder="Ad Soyad"
            />
          </div>
          <span className="input-validation-error">{formError.fullname}</span>
          <div className=" webflow-style-input">
            <input
              onChange={handleValidation}
              value={formValue.email}
              name="email"
              className="pop-font"
              type="text"
              placeholder="E-posta"
            />
          </div>
          <span className="input-validation-error">{formError.email}</span>
          <div className=" webflow-style-input">
            <textarea
              onChange={handleValidation}
              value={formValue.message}
              name="message"
              className="pop-font"
              placeholder="Mesajınız"
            />
          </div>
          <span className="input-validation-error">{formError.message}</span>
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={process.env.REACT_APP_CAPTCHA_KEY}
            theme="dark"
          />
          <span className="input-validation-error">{captchaError}</span>
          <button type="submit" className="active-button-style">
            Gönder
          </button>
        </form>
      )}
      <section className="contact-us-img"></section>
      <section className="contact-us-content pop-font">
        <section className="contact-us-content-txt">
          <h2 className="">Bizimle İletişime Geç</h2>
          <p>
            Yanıtınızı büyük bir heyecanla bekliyor ve her türlü görüşünüzü
            almak için sabırsızlanıyoruz. sorularınız olabilir. Lütfen bize
            ulaşmaktan çekinmeyin daha fazla açıklama veya yardıma ihtiyaç
            duymanız halinde. Sizin geri bildirimler ve sorular bizim için son
            derece önemlidir ve biz İhtiyacınız olan desteği sağlamak için
            buradayız. Duymak için sabırsızlanıyoruz senden!
          </p>
        </section>
      </section>
    </motion.main>
  );
};

export default Contact;
