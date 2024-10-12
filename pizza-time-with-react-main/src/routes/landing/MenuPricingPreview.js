import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import menuPricing from "../../data/menuPricing";

export default class MenuPricingPreview extends React.Component {
  render() {
    return (
      <motion.article
        className="section-5 flex-container "
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <h2 className="txt-center pop-font txt-white">Menü Fiyatları</h2>
        <p className="section-description">
          Her yemeğin her lokması farklı ve özeldir. Asla doyamayacaksın ve her
          zaman yeni bir şeyler bulabileceksiniz. sizin için ilginç. Size
          sunduğumuz her ağız sulandırıcı seçeneği keşfedin teklif
        </p>
        <section className="pricing-grid flex-container flex-column">
          {menuPricing.map((menu) => (
            <Tilt key={menu.id}>
              <Link
                onClick={ResetLocation}
                to="/menu"
                className="pricing-grid-item flex-container flex-row"
              >
                <img
                  className="pricing-img"
                  alt={menu.name}
                  src={menu.img375}
                />
                <section className="pricing-details flex-container flex-column">
                  <section className="name-and-price flex-container flex-row txt-center">
                    <h3 className="pop-font">{menu.name}</h3>
                    <p>
                      <span>{menu.currency}</span>
                      {menu.price}
                    </p>
                  </section>
                  <p>{menu.description}</p>
                </section>
              </Link>
            </Tilt>
          ))}
        </section>
      </motion.article>
    );
  }
}
