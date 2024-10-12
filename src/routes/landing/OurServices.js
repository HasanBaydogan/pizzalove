import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import ourServices from "../../data/ourServices";

const OurServices = () => {
  return (
    <motion.article
      className="section-3-container"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h2 className="pop-font">Hizmetlerimiz</h2>
      <p className="pop-font section-description">
        Pizza Love, tüm şehirşerde çeşitli yiyecek ve içecek hizmetleri
        sunmaktadır, tercih sizin! Bizi özel kılan, sunduğumuz tüm mutfaklar
        hakkında geniş bilgiye sahip profesyonel ekiplerimizdir.
      </p>

      <section className="services-grid  flex-container flex-column">
        {ourServices.map((service) => (
          <Tilt key={service.id}>
            <section className="service-list flex-container flex-column">
              <img
                width="50"
                height="50"
                className="service-img"
                src={service.img}
                alt=""
                aria-hidden="true"
              />

              <section>
                <h3 className="pop-font">{service.name}</h3>
                <p>{service.description}</p>
              </section>
            </section>
          </Tilt>
        ))}
      </section>
    </motion.article>
  );
};

export default OurServices;
