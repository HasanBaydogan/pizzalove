import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCollaboration = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">İşbirliği</h2>
        <h3>İşletmeye katılın</h3>
        <p>
          İster kurumsal bir etkinliğe yemek servisi olsun, ister bir kişiye
          öğle yemeği ikramı olsun, iş toplantısı veya çalışanlara lezzetli bir
          yemek teklif etmek keyfini çıkarın, işletmelerin benzersiz
          ihtiyaçlarını karşılamaya kararlıyız bizim bölgemiz. Menümüz
          klasiklerden, geniş bir seçenek yelpazesine sahiptir. pizzalardan
          salatalara, sandviçlerden makarna yemeklerine kadar, emin
          olabilirsiniz herkesin keyif alacağı bir şeyler var. Unutmayın, Pizza
          Zamanı bir Ekaterine Mitagvaria tarafından yapılan kurgusal pizza
          restoranı.
        </p>
        <Link
          to="/contact"
          onClick={ResetLocation}
          className="active-button-style"
        >
          Arama talebinde bulunun
        </Link>
      </section>
    </article>
  );
};

export default AboutCollaboration;
