import { WelcomeBanner } from "../../components/welcomeBanner/WelcomeBanner";
import { useState, useRef, useEffect } from "react";
import Stats from "./sections/stats/Stats";
import Faq from "./sections/stats/Faq";
import "./about.scss";

const tabs = [
  {
    id: "mission",
    label: "Misión",
    content:
      "Brindar atención odontológica integral y de calidad, enfocada en la prevención, el diagnóstico y el tratamiento oportuno, garantizando confianza y bienestar a cada paciente mediante un servicio humano, cercano y profesional.",
  },
  {
    id: "vision",
    label: "Visión",
    content:
      "Ser reconocidos como un consultorio odontológico líder en la región, referente por su excelencia en el cuidado de la salud bucal, innovación en tratamientos y compromiso con mejorar la calidad de vida de nuestros pacientes.",
  },
];

const InfoTabs = () => {
  const [active, setActive] = useState(tabs[0].id);
  const scrollRef = useRef(null);

  useEffect(() => {
    const panel = document.getElementById(`panel-${active}`);
    if (panel && scrollRef.current) {
      panel.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }, [active]);

  const onKeyDown = (e: { key: string }) => {
    const idx = tabs.findIndex((t) => t.id === active);
    if (e.key === "ArrowRight") {
      const next = tabs[(idx + 1) % tabs.length].id;
      setActive(next);
    } else if (e.key === "ArrowLeft") {
      const prev = tabs[(idx - 1 + tabs.length) % tabs.length].id;
      setActive(prev);
    }
  };

  return (
    <div className="info-tabs">
      <div
        role="tablist"
        aria-label="Información de la clínica"
        className="info-tabs__list"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            className={`info-tabs__tab ${
              active === t.id ? "info-tabs__tab--active" : ""
            }`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* contenedor horizontal con scroll-snap */}
      <div
        className="info-tabs__scroll"
        ref={scrollRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="Paneles de información"
      >
        {tabs.map((t) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`panel-${t.id}`}
            aria-labelledby={`tab-${t.id}`}
            aria-hidden={active !== t.id}
            className="info-tabs__panel"
          >
            <div className="info-tabs__panel-inner">
              <div className="info-tabs__bar" aria-hidden="true" />
              <p>{t.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <WelcomeBanner text="Simon Cabarcas" />
      <div className="about__container">
        <section
          className="about__section about__section--hero"
          aria-labelledby="hero-title"
        >
          <div className="about__content">
            <h2 id="hero-title">
              Cuidamos tu sonrisa con dedicación y compromiso en cada consulta.
            </h2>
            <p className="lead">
              Nuestro objetivo es ofrecer un servicio odontológico cálido y
              profesional, donde cada paciente se sienta seguro, acompañado y
              con la confianza de recibir la mejor atención para su salud bucal.
            </p>

            <InfoTabs />
          </div>
          <div className="about__image about__image--hero">
            <img
              src="/images/about-2.jpg"
              alt="Paciente sonriendo durante revisión dental"
              loading="lazy"
              width="720"
              height="900"
            />
          </div>
        </section>
        <Stats />
        <Faq />
      </div>
    </div>
  );
};

export default About;
