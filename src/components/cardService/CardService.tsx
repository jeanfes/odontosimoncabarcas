import React from "react";
import "./cardService.scss";

interface CardServiceProps {
  image?: string;
  alt?: string;
  tag: string;
  description?: string;
  onClick?: () => void;
}

export const CardService: React.FC<CardServiceProps> = ({
  image,
  alt,
  tag,
  description,
  onClick,
}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={alt} className="card__image" />
      <div className="card__overlay">
        <span className="card__tag">{tag}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
