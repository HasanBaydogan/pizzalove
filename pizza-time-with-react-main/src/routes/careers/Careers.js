import { Link } from "react-router-dom";
import { useEffect } from "react";
//components
import ResetLocation from "../../helpers/ResetLocation";
//data
import careers from "../../data/careers";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Pizza Time";
  }, []);
  return (
    <main className="careers">
      <h2>Kariyer</h2>
      <h3>
        Uzmanlığınız, tutkunuz ve emeğinizle değer katabileceğinizi
        düşünüyorsanız çalış, TEK sen olabilirsin!
      </h3>
      <section className="careers-section">
        {careers.map((career) => (
          <section key={career.id} className="careers-listing">
            <section className="single-listing">
              <h4>{career.title}</h4>
              <p>{career.description}</p>
              <hr />
            </section>
            <Link to="/contact" onClick={ResetLocation}>
              Uygula
            </Link>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Careers;
