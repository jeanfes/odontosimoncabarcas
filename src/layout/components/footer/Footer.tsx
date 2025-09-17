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
          <div className="info-card info-card--hours" aria-hidden={false}>
            <h4 className="info-card__title">Horario de Atención</h4>
            <ul className="info-card__list">
              <li>
                <span className="info-card__label">Lunes - Viernes</span>
                <span className="info-card__value">09:00-18:00</span>
              </li>
              <li>
                <span className="info-card__label">Sábado</span>
                <span className="info-card__value">10:00-16:00</span>
              </li>
              <li>
                <span className="info-card__label">Domingo</span>
                <span className="info-card__value">Cerrado</span>
              </li>
            </ul>
          </div>

          <div className="info-card info-card--office">
            <h4 className="info-card__title">Ubicación de la Oficina</h4>
            <ul className="info-card__list">
              <li>
                <span className="info-card__label">Lugar</span>
                <span className="info-card__value">
                  Junto a la Preparatoria
                </span>
              </li>
              <li>
                <span className="info-card__label">Teléfono</span>
                <span className="info-card__value">(555) 555-0123</span>
              </li>
              <li>
                <span className="info-card__label">Correo</span>
                <span className="info-card__value">contacto@ejemplo.com</span>
              </li>
            </ul>
          </div>

          <div className="info-card info-card--service">
            <h4
              className="info-card__title"
              style={{
                color: "var(--white)",
              }}
            >
              Ubicación del Servicio
            </h4>
            <ul className="info-card__list">
              <li>
                <span className="info-card__label">Lugar</span>
                <span className="info-card__value">
                  SmileCare Dental Studio
                </span>
              </li>
              <li>
                <span className="info-card__label">Teléfono</span>
                <span className="info-card__value">(123) 456-7890</span>
              </li>
              <li>
                <span className="info-card__label">Correo</span>
                <span className="info-card__value">servicios@ejemplo.com</span>
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
                <img src={LogoMaron} alt="Logo Simón Cabarcas" />
              </div>
              <div className="footer-brand__tag">
                Tu sonrisa es nuestra prioridad.
              </div>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <div className="footer-nav__col">
              <h5 className="footer-nav__title">Servicios</h5>
              <ul>
                <li>
                  <a href="#oral">Higiene Oral</a>
                </li>
                <li>
                  <a href="#retainer">Colocación de Retenedores</a>
                </li>
                <li>
                  <a href="#prevent">Cuidado Preventivo</a>
                </li>
              </ul>
            </div>

            <div className="footer-nav__col">
              <h5 className="footer-nav__title">Horario</h5>
              <ul>
                <li>Dom: CERRADO</li>
                <li>Lun a Dom: 9 AM - 7 PM</li>
                <li>Sáb a Vie: 10 AM - 7 PM</li>
              </ul>
            </div>

            <div className="footer-nav__col footer-nav__newsletter">
              <h5 className="footer-nav__title">Boletín</h5>
              <p className="footer-nav__desc">
                Descubre nuevas ofertas y mantente al día
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
          <div className="footer__links">
            <a href="#contact">Contacto</a>
          </div>
          <div className="footer__copyright">
            © {new Date().getFullYear()} Simon Cabarcas. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};
