import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import "./section1.scss";

export const Section1 = () => {
  const navigate = useNavigate();

  const goToAppointment = () => {
    navigate("/agenda-tu-cita");
  };

  return (
    <div className="section1">
      <div className="section1__content">
        <div className="section1__text">
          <p>
            Arregla tu sonrisa, recupera tu confianza
          </p>
          <span>
            Atención odontológica profesional y personalizada para cuidar tu
            salud bucal y tu sonrisa.
          </span>
        </div>
        <Button text="AGENDAR UNA CITA" onClick={goToAppointment} />
      </div>
    </div>
  );
};
