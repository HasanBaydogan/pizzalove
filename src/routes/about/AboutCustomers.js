import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">Mutlu Müşteriler</h2>
        <h3>1600'den Fazla Olumlu Geri Bildirim</h3>
        <p>
          Başarımızın, yüksek kaliteli yemekler ve mükemmel hizmet sunma
          konusundaki taahhüdümüzden kaynaklandığına inanıyoruz. Menümüz, taze
          ve yerel kaynaklı malzemelerle hazırlanan, lezzetli pizzalar,
          salatalar, sandviçler, makarna yemekleri ve daha fazlasını içeren
          geniş bir yelpazeye sahiptir. Her yemeğin en ince detayına kadar
          özenle hazırlanmasını sağlıyor ve her lokmanın son lokma kadar
          lezzetli olmasına dikkat ediyoruz. Ayrıca, harika yemeğin sadece işin
          bir parçası olduğunu anlıyoruz. Bu yüzden kapımızdan giren her
          müşteriye olağanüstü hizmet sunmaya büyük önem veriyoruz. Özverili
          personel ekibimiz, her misafirin kendini ailemizin bir parçası gibi
          hissettiği sıcak ve samimi bir ortam sağlama konusunda kararlıdır.
        </p>
      </section>

      <div className="img-glass"></div>
    </article>
  );
};

export default AboutCustomers;
