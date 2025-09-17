import "./section5.scss";

export const Section5 = () => {
  return (
    <section className="section5">
      <div className="section5__inner">
        <div className="section5__media">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Doctor en clínica dental"
            className="section5__image"
          />
        </div>

        <div className="section5__content">
          <div className="section5__text">
            <h2 className="section5__title">
              Agendamiento flexible <br /> que se adapta a ti
            </h2>
            <p className="section5__lead">
              En nuestra clínica entendemos que la vida puede ser ajetreada —
              por eso ofrecemos opciones de agendamiento flexibles diseñadas
              para adaptarse a tu ritmo y estilo de vida. Atención de calidad
              cuando la necesitas.
            </p>
          </div>
          <hr className="section5__divider" />
          <div className="section5__testimonial">
            <blockquote className="section5__quote">
              “El Dr. Simon Cabarcas demuestra una gran combinación de pericia
              técnica y empatía. Siempre busca la mejor solución para cada
              paciente, explicando con claridad y cuidando los detalles para que
              la experiencia sea cómoda y confiable.”
            </blockquote>
            <div className="section5__meta">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Simon Cabarcas"
                className="section5__avatar"
              />
              <div className="section5__meta-text">
                <div className="section5__name">Simon Cabarcas</div>
                <div className="section5__role">Doctor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
