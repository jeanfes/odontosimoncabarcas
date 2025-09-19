import { useState } from "react";
import "./faq.scss";

const faqs = [
  {
    question: "¿Atienden urgencias odontológicas?",
    answer:
      "Sí, contamos con atención prioritaria para emergencias como dolor intenso, fracturas dentales o infecciones. Recomendamos llamar antes para brindarte una cita inmediata.",
  },
  {
    question: "¿Ofrecen planes de financiamiento para tratamientos?",
    answer:
      "Sí, tenemos opciones de pago flexibles y planes de financiamiento para facilitar el acceso a tratamientos de ortodoncia, implantes y estética dental.",
  },
  {
    question: "¿Realizan blanqueamiento dental?",
    answer:
      "Sí, ofrecemos blanqueamiento dental profesional seguro y efectivo, adaptado a las necesidades de cada paciente.",
  },
  {
    question: "¿Atienden a niños?",
    answer:
      "Contamos con especialistas en odontopediatría que se encargan de la salud bucal de los más pequeños en un ambiente cálido y amigable.",
  },
  {
    question: "¿Qué debo hacer si pierdo un diente por accidente?",
    answer:
      "Debes acudir inmediatamente a nuestra clínica. Conserva la pieza en leche o suero fisiológico y ven lo antes posible para aumentar las posibilidades de reimplante.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__header">
          <h2>Preguntas frecuentes</h2>
          <p>
            Resolvemos las dudas más comunes de nuestros pacientes para
            brindarte tranquilidad y confianza en tu cuidado dental.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((item, index) => (
            <div key={index} className="faq__item">
              <button
                className="faq__question"
                onClick={() => toggle(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq__icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
