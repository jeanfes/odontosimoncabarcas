import { WelcomeBanner } from "../../../../components/welcomeBanner/WelcomeBanner";
import { MoreServices } from "../../components/moreServices/MoreServices";
import type { ServiceSection } from "../../../../interfaces/service";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import { services } from "../../../../data/services";
import { useEffect } from "react";
import "./infoService.scss";

const InfoService = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location?.state?.service;
  const filteredServices = services.filter(
    (s) => s.tag !== service?.tag && s.title !== service?.title
  );

  const getRandomItems = (arr: typeof services, n: number) => {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };
  const randomServices = getRandomItems(filteredServices, 3);

  useEffect(() => {
    if (!service) {
      navigate("/servicios", { replace: true });
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="info-service">
      <WelcomeBanner text={service.tag} />
      <div className="info-service__content">
        {service.title && (
          <h1 className="info-service__title">{service.title}</h1>
        )}
        {service.intro && <p className="info-service__lead">{service.intro}</p>}
        {Array.isArray(service.images) && service.images[0] && (
          <div className="info-service__hero">
            <img
              src={service.images[0]}
              alt={service.alt}
              className="info-service__hero-img"
            />
          </div>
        )}
        {Array.isArray(service.sections) &&
          service.sections.map((sec: ServiceSection, index: number) => (
            <section className="info-service__section" key={index}>
              {sec.title && <h3 className="section__title">{sec.title}</h3>}
              {Array.isArray(sec.paragraphs) &&
                sec.paragraphs.map((p: string, indice: number) => (
                  <p className="section__p" key={indice}>
                    {p}
                  </p>
                ))}
              {Array.isArray(sec.list) && (
                <ul className="section__list">
                  {sec.list.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {typeof sec.imageIndex === "number" &&
                Array.isArray(service.images) &&
                service.images[sec.imageIndex] && (
                  <div className="section__image">
                    <img
                      src={service.images[sec.imageIndex]}
                      alt={service.alt}
                    />
                  </div>
                )}
            </section>
          ))}
        {service.description && (
          <p className="info-service__description">{service.description}</p>
        )}
        <div className="info-service__cta">
          <Button
            text="VOLVER A SERVICIOS"
            onClick={() => navigate("/servicios")}
          />
        </div>
        <MoreServices items={randomServices} />
      </div>
    </div>
  );
};

export default InfoService;
