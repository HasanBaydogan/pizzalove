import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import img375 from "../../assets/images/section-one/section-one-375.webp";
import img700 from "../../assets/images/section-one/section-one-700.webp";
import img1440 from "../../assets/images/section-one/section-one-1440.webp";
import PizzaOne from "../../assets/images/welcome-section/pizza-one-parallax.webp";
import PizzaTwo from "../../assets/images/welcome-section/pizza-two-parallax.webp";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section">
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.img
          src={PizzaTwo}
          alt=""
          className=" pizza-two"
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1,
            translateX: -100,
          }}
          transition={{ duration: 5 }}
        />
        <motion.img
          src={PizzaOne}
          alt=""
          className=" pizza-one"
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1,
            translateX: 100,
          }}
          transition={{ duration: 5 }}
        />
        <h2 className="txt-white">
          <span>Pizza Love</span> restoranına hoş geldiniz
        </h2>
        <p>
          1982 yılında kurulan şirketimiz, dilim dilim pizzayı bir üst seviyeye
          taşıyor! Benzersiz markalaşma ve pizza endüstrisinde olmak,
          başarımızın formülüdür. İnsanların ne istediğini anlıyor ve arzularını
          eşsiz lezzet deneyimlerine dönüştürüyoruz. Tazelik, orijinallik ve
          kalite bizim önceliklerimizin sadece küçük bir kısmıdır. Uygun
          maliyetler, neredeyse her yerde bulunma, tek tıkla yemek siparişi
          verebileceğiniz harika çevrimiçi operasyonel sistem. Kullanımı kolay
          ön sipariş seçenekleri ve kurumsal partiler için harika alternatifler!
          Pizza Love'da sizi önemsiyoruz çünkü siz bizi özel kılan kişisiniz!
        </p>
      </section>
      <LazyLoadImage
        className="section-two-img"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`}
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Pizza Time restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  );
};

export default WelcomeSection;
