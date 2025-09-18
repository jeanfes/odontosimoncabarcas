import { CardService } from "../../../../components/cardService/CardService";
import type { Service } from "../../../../interfaces/service";
import Button from "../../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./moreServices.scss";

type MoreServiceProps = {
  items?: Service[];
  title?: string;
  subtitle?: string;
};

const slugify = (text = "") =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const MoreServices: React.FC<MoreServiceProps> = ({
  items = [],
  title = "Mas Servicios",
  subtitle = "",
}) => {
  const navigate = useNavigate();

  if (!Array.isArray(items) || items.length === 0) return null;

  const handleNavigateToService = (service: Service): void => {
    const slug = slugify(service.tag || service.title || "servicio");
    navigate(`/servicios/${slug}`, { state: { service } });
  };

  return (
    <section className="more-services" aria-labelledby="more-services-title">
      <div className="more-services__inner">
        <div className="more-services__header">
          <div>
            <h2 id="more-services-title" className="more-services__title">
              {title}
            </h2>
            {subtitle && <p className="more-services__subtitle">{subtitle}</p>}
          </div>

          <div className="more-services__cta">
            <Button
              text="AGENDA UNA CITA"
              onClick={() => navigate("/agenda-tu-cita")}
            />
          </div>
        </div>

        <div className="more-services__grid">
          {items.map((service, index) => {
            const safeTag = service.tag ?? service.title ?? `servicio-${index}`;
            const safeAlt = service.alt ?? safeTag;

            return (
              <CardService
                key={safeTag + index}
                image={service.image}
                alt={safeAlt}
                tag={safeTag}
                description={service.description}
                onClick={() => handleNavigateToService(service)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
