import { WelcomeBanner } from "../../components/welcomeBanner/WelcomeBanner";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <WelcomeBanner text="Simon Cabarcas" />
      <section className="about__section">
        <div className="about__content">
          <h2>Comprometidos con tu sonrisa</h2>
          <p>
            Nuestra misión es ofrecer una experiencia odontológica moderna y
            personalizada. Con la última tecnología y un trato humano,
            garantizamos que cada visita sea segura y agradable.
          </p>
        </div>
        <div className="about__image">
          <img src="/images/about-1.jpg" alt="Atención odontológica" />
        </div>
      </section>
      <section className="about__section about__section--reverse">
        <div className="about__image">
          <img src="/images/about-2.jpg" alt="Sonrisa feliz" />
        </div>
        <div className="about__content">
          <h2>Más de 10 años de experiencia</h2>
          <p>
            Desde 2015 hemos atendido a cientos de pacientes, ayudándoles a
            recuperar la confianza en su sonrisa y mantener una salud bucal
            óptima. Tu bienestar es nuestra prioridad.
          </p>
          <ul className="about__stats">
            <li>
              <strong>+10</strong> Años de experiencia
            </li>
            <li>
              <strong>+500</strong> Pacientes atendidos
            </li>
            <li>
              <strong>100%</strong> Compromiso contigo
            </li>
          </ul>
        </div>
      </section>
      <section className="about__reviews">
        <h2>Lo que dicen nuestros pacientes</h2>
        <div className="about__review">
          <blockquote>
            “El doctor Simon me atendió con mucha paciencia y profesionalismo.
            Nunca había sentido una cita odontológica tan tranquila.”
          </blockquote>
          <cite>
            <strong>Ana María López</strong> — Paciente
          </cite>
        </div>
      </section>
    </div>
  );
};

export default About;
