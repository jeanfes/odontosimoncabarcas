import React from "react";
import Button from "../../../../components/button/Button";
import "./section2.scss";

type Card = {
  title: string;
  description: string;
  duration: string;
  price: string;
};

const cards: Card[] = [
  {
    title: "Diseño de sonrisa",
    description:
      "Carillas/coronas estéticas para una sonrisa natural. Mejora forma y color.",
    duration: "3–6 sesiones",
    price: "Desde COP $1.400.000 por diente",
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Evaluación, limpieza básica y blanqueamiento en consultorio. Opciones Express o Completo.",
    duration: "1–2 sesiones",
    price: "Desde COP $250.000 (Express) / COP $450.000 (Completo)",
  },
  {
    title: "Implante Dental",
    description:
      "Implante osteointegrado. Prótesis sobre implante cotizada por separado.",
    duration: "Cirugía + 3–6 meses integración",
    price: "Desde COP $1.600.000 por implante",
  },
  {
    title: "Armonización Orofacial",
    description:
      "Toxina y/o rellenos para corregir asimetrías y realzar la sonrisa.",
    duration: "1 sesión (30–60 min)",
    price: "Desde COP $350.000 (toxina) / COP $800.000 (relleno)",
  },
];

export const Section2: React.FC = () => {
  return (
    <section className="section2" aria-label="Servicios dentales destacados">
      <div className="section2__content">
        <div className="section2__text">
          <h2>Cuidado experto para cada tipo de dentadura</h2>
          <p className="section2__subtitle">
            Tratamientos estéticos y funcionales con atención personalizada.
          </p>
        </div>

        <div
          className="section2__cards"
          role="list"
          aria-label="Lista de servicios"
        >
          {cards.map((card, idx) => (
            <article className="section2__card" key={idx} role="listitem">
              <header className="section2__card-header">
                <h3>{card.title}</h3>
              </header>

              <div className="section2__card-body">
                <p className="section2__card-desc">{card.description}</p>

                <div className="section2__card-meta" aria-hidden="true">
                  <div className="section2__duration">{card.duration}</div>
                  <div className="section2__price">{card.price}</div>
                </div>

                <div className="section2__card-action">
                  <Button aria-label={`Agenar ${card.title}`} text="AGENDAR" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
