import React from "react";
import { motion } from "framer-motion";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [39.7668, 30.541];

const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <motion.div
        className="map"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <MapContainer
          id="map"
          center={position}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Bize Ulaş</h3>
        <p>
          Bir sorunuz, öneriniz ya da sadece merhaba demek mi istiyorsunuz?
          Sizden haber almak isteriz!
        </p>
        <section>
          <h4>Müşteri Desteği:</h4>
          <p>
            Özel müşteri destek ekibimiz her türlü konuda size yardımcı olmaya
            hazırdır sorularınız olabilir.
          </p>
          <ul>
            <li>- E-posta: support@pizzalove.com</li>
            <li>- Telefon: (+90) 555 555 5555</li>
            <li>- Çalışma Saatleri: Pazartesi - Cuma, 8:00 - 21:00</li>
          </ul>
        </section>
        <section>
          <h4>Genel Sorular:</h4>
          <p>
            Şirketimiz, ortaklıklarımız hakkında genel sorularınız varsa veya
            Başka bir şey olursa, iletişime geçmekten çekinmeyin.
          </p>
          <ul>
            <li>- E-posta: info@pizzalove.com</li>
          </ul>
        </section>
        <section>
          <h4>Geri Bildirim ve Öneriler:</h4>
          <p>
            Geri bildirimlerinize değer veriyoruz ve her zaman gelişmek için
            çabalıyoruz. Eğer siz nasıl geliştirebileceğimize dair herhangi bir
            öneriniz, yorumunuz veya fikriniz varsa teklifler, lütfen bize
            bildirin.
          </p>
          <ul>
            <li>- E-posta: feedback@pizzalove.com</li>
          </ul>
        </section>
      </motion.div>
    </article>
  );
};

export default ContactLanding;
