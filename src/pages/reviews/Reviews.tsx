import { WelcomeBanner } from "../../components/welcomeBanner/WelcomeBanner";
import "./reviews.scss";

const reviews = [
    {
        text: "Desde que entré, me sentí bienvenido y tranquilo; todo el equipo fue muy cálido.",
        description:
            "Siempre fui muy consciente de mis dientes, pero todo cambió después de visitar esta clínica. El equipo fue increíblemente amable, profesional y paciente conmigo en cada paso. Se aseguraron de que me sintiera cómodo.",
        author: "Daniel Eduardo",
        role: "Paciente de ortodoncia",
        image:
            "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        text: "Desde el primer momento supe que estaba en buenas manos — todos fueron muy acogedores.",
        description:
            "Antes tenía miedo a los procedimientos dentales, pero el ambiente aquí hizo toda la diferencia. Todos fueron atentos y me explicaron cada paso con paciencia. Ahora sonrío con total confianza.",
        author: "Regina Martínez",
        role: "Paciente de blanqueamiento",
        image:
            "https://images.unsplash.com/photo-1606813907290-9e2bb9e7f9ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        text: "El personal me hizo sentir seguro, valorado y completamente cómodo.",
        description:
            "Antes de venir aquí, me ponía nervioso incluso con las limpiezas rutinarias. Ahora realmente espero mis citas. El personal realmente se preocupa por los pacientes y hace que la experiencia sea libre de estrés.",
        author: "Camila Gómez",
        role: "Paciente de limpieza dental",
        image:
            "https://images.unsplash.com/photo-1630699144866-37dd934e9bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <WelcomeBanner text="Reseñas" />
      <div className="reviews__grid">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`reviews__item ${
              index % 2 === 0 ? "reviews__item--reverse" : ""
            }`}
          >
            <div className="reviews__image">
              <img src={review.image} alt={review.author} />
            </div>
            <div className="reviews__content">
              <p className="reviews__text">“{review.text}”</p>
              <p className="reviews__description">{review.description}</p>
              <div className="reviews__author">
                <strong>{review.author}</strong>
                <span>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
