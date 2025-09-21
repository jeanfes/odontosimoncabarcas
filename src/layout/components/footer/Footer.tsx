import LogoMaron from "../../../assets/images/LogoMaron.png";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <div
        className="footer__hero"
        role="img"
        aria-label="Recepción de clínica dental"
      >
        <div className="footer__hero-overlay" />
        <div className="footer__cards">
          {/* Card: Horario */}
          <div className="info-card info-card--hours" aria-hidden={false}>
            <h4 className="info-card__title">Horario de Atención</h4>
            <ul className="info-card__list">
              <li>
                <span className="info-card__label">Lunes - Viernes</span>
                <span className="info-card__value">07:00 - 18:00</span>
              </li>
              <li>
                <span className="info-card__label">Sábado</span>
                <span className="info-card__value">07:00 - 17:00</span>
              </li>
              <li>
                <span className="info-card__label">Domingo</span>
                <span className="info-card__value">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Card: Ubicación y Contacto */}
          <div className="info-card info-card--office">
            <h4 className="info-card__title">Ubicación de la Oficina</h4>
            <ul className="info-card__list">
              <li>
                <span className="info-card__label">Dirección</span>
                <span className="info-card__value">
                  Cl. 45 #20-158, Barranquilla, Atlántico
                </span>
              </li>
              <li>
                <span className="info-card__label">Teléfono</span>
                <span className="info-card__value">+57 304 364 5769</span>
              </li>
              <li>
                <span className="info-card__label">Correo</span>
                <span className="info-card__value">
                  simoncabarcas@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Servicios Destacados */}
          <div className="info-card info-card--service">
            <h4 className="info-card__title" style={{ color: "var(--white)" }}>
              Servicios Destacados
            </h4>
            <ul className="info-card__list">
              <li>
                <span className="info-card__label">Ortodoncia</span>
                <span className="info-card__value">Brackets y alineadores</span>
              </li>
              <li>
                <span className="info-card__label">Estética Dental</span>
                <span className="info-card__value">
                  Blanqueamiento y carillas
                </span>
              </li>
              <li>
                <span className="info-card__label">Implantes</span>
                <span className="info-card__value">
                  Reemplazo de piezas dentales
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__body">
        <div className="footer__inner">
          <div className="footer-brand">
            <div className="footer-brand__text">
              <div className="footer-brand__logo">
                <img src={LogoMaron} alt="Logo Clínica Dental Marón" />
              </div>
              <div className="footer-brand__tag">
                Tu sonrisa, nuestra pasión.
              </div>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <div className="footer-nav__col footer-nav__newsletter">
              <h5 className="footer-nav__title">Boletín</h5>
              <p className="footer-nav__desc">
                Suscríbete y recibe tips de cuidado dental
              </p>
              <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="footer-email" className="sr-only">
                  Correo electrónico
                </label>
                <input
                  id="footer-email"
                  className="newsletter__input"
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                />
                <button className="newsletter__btn" aria-label="Suscribirse">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 21l21-9L2 3v7l15 2-15 2v7z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} Clínica Dental Marón. Todos los
            derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
