import React from "react";
//images
import SlideOne from "../../assets/images/img-one.jpeg";
import SlideTwo from "../../assets/images/carbonara.jpeg";
import SlideThree from "../../assets/images/img-three.jpeg";
import SlideFour from "../../assets/images/img-four.jpeg";

const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>Hakkımızda</h2>
        <h3 className="sub-title">Lezzetli yemeklerden daha fazlası</h3>
        <p>
          1982 yılında kurulan şirketimiz, dilim dilim pizzayı bir üst seviyeye
          taşıyor! Benzersiz markalaşma stratejilerimiz ve pizza endüstrisindeki
          yerimizle, öne çıkmanın ve başarıyı yakalamanın formülünü bulduk.
          İnsanların ne istediğini anlıyor ve arzularını eşsiz lezzet
          deneyimleriyle karşılıyoruz. Tazelik, orijinallik ve kalite bizim için
          sadece önceliklerin küçük bir kısmını oluşturuyor. Uygun maliyetlerle,
          neredeyse her yerde yemek siparişi vermenizi sağlayan inanılmaz
          çevrimiçi operasyonel sistemimizle hizmet veriyoruz. Kullanımı kolay
          ön sipariş seçeneklerimiz ve kurumsal partiler için harika
          alternatiflerimizle hizmetinizdeyiz! Pizza Love'da sizi önemsiyoruz
          çünkü siz bizi özel kılan unsursunuz! Pizza Zamanı projesi, pizza
          tutkusuyla Ekaterine Mitagvaria tarafından sevgiyle hazırlandı.
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  );
};

export default AboutUs;
