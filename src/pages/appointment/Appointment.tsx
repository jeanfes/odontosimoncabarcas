import { WelcomeBanner } from "../../components/welcomeBanner/WelcomeBanner";
import { ScheduleAppointment } from "./forms/ScheduleAppointment";
import { AiFillInstagram } from "react-icons/ai";
import "./appointment.scss";

const Socials = () => {
  return (
    <div className="socials">
      <p className="title">Sigueme En</p>
      <div className="icons">
        <a
          href="https://www.instagram.com/odontsimoncabarcas"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram width={34} height={34} size={34}/>
        </a>
      </div>
    </div>
  );
};

const Appointment = () => {
  return (
    <div className="appointment-page">
      <WelcomeBanner text="Agenda tu cita" />

      <section className="appointment-content">
        <div className="appointment-info">
          <div className="contact">
            <p className="subtitle">
              ¿Prefieres hablar directamente? Llámanos ahora.
            </p>
            <h2 className="phone">(+57) 304 3645769</h2>
            <p className="description">
              No dudes en llamarnos para solicitar orientación en línea <br /> o
              agendar tu próxima revisión dental.
            </p>
          </div>

          <div className="socials">
            <Socials />
          </div>
        </div>

        <ScheduleAppointment />
      </section>

      <section className="appointment-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.029175671585!2d-74.79572608841772!3d10.96116865571195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d2cca272e05%3A0x4ce39584c26919!2sSim%C3%B3n%20cabarcas%20Odontologia%20Premium!5e0!3m2!1ses-419!2sco!4v1757991846174!5m2!1ses-419!2sco"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Appointment;
