import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Kariyer</h2>
        <h3>Ekibimize Katılın</h3>
        <p>
          Harika yemekler, olağanüstü müşteri hizmetleri ve eğlenceli, dinamik
          bir ekiple çalışmak konusunda tutkulu musunuz? Öyleyse, Pizza Time
          ekibimize katılmanızı çok isteriz! Garsonlardan ve aşçılardan mutfak
          personeline ve yönetime kadar çeşitli roller için yetenekli ve motive
          bireyler arıyoruz. Yiyecek hizmeti sektörüne yeni başlıyor olun ya da
          yılların deneyimine sahip olun, kişisel ve profesyonel gelişimi teşvik
          eden destekleyici ve işbirlikçi bir çalışma ortamı sunuyoruz.
        </p>
        <Link
          to="/careers"
          onClick={ResetLocation}
          className="active-button-style"
        >
          Şimdi Katıl
        </Link>
      </section>

      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
};
export default AboutCareers;
