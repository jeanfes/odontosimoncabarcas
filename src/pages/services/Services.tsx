import { WelcomeBanner } from "../../components/welcomeBanner/WelcomeBanner";
import { CardService } from "../../components/cardService/CardService";
import type { Service } from "../../interfaces/service";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/services";
import React, { useState } from "react";
import "./services.scss";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const Services: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  const handleNavigateToService = (service: Service) => {
    const slug = slugify(service.tag);
    navigate(`/servicios/${slug}`, {
      state: { service },
    });
  };

  return (
    <div className="services">
      <WelcomeBanner text="Nuestros Servicios" />
      <div className="services-container">
        <div className="services-content">
          {services.slice(0, visibleCount).map((service, idx) => (
            <CardService
              key={service.tag + idx}
              image={service.image}
              alt={service.alt}
              tag={service.tag}
              description={service.description}
              onClick={() => handleNavigateToService(service)}
            />
          ))}
        </div>

        <div className="load-more-button">
          {visibleCount < services.length && (
            <Button onClick={handleLoadMore} text="CARGAR MÁS" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
