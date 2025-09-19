import "./stats.scss";

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__image">
          <img
            src="/images/about-3.jpg"
            alt="Dentista trabajando con paciente"
            loading="lazy"
            width="600"
            height="500"
          />
        </div>

        <div className="stats__content">
          <h2>
            Cuidamos tu sonrisa,
            <br />
            con experiencia y confianza.
          </h2>
          <p>
            Nuestro consultorio odontológico se dedica a brindar atención
            integral y personalizada. Creemos que una sonrisa sana mejora la
            calidad de vida y trabajamos cada día para superar las expectativas
            de nuestros pacientes.
          </p>

          <div className="stats__metrics">
            <div className="stats__metric">
              <span>Años de experiencia</span>
              <strong>15+</strong>
            </div>
            <div className="stats__metric">
              <span>Pacientes atendidos</span>
              <strong>10,000+</strong>
            </div>
            <div className="stats__metric">
              <span>Tratamientos realizados</span>
              <strong>20,000+</strong>
            </div>
            <div className="stats__metric">
              <span>Satisfacción del paciente</span>
              <strong>98%</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
