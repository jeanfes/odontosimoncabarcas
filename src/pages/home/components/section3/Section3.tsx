import { IconArrowRight } from "../../../../assets/icons/IconArrowRight";
import { CardService } from "../../../../components/cardService/CardService";
import "./section3.scss";

export const Section3 = () => {
  return (
    <section className="section3">
      <div className="section3__header">
        <h2>Selecciona tu tratamiento</h2>
        <p>
          Con años de experiencia práctica en múltiples sectores, aporto un
          profundo conocimiento de la industria y habilidad técnica.
        </p>
      </div>

      <div className="section3__content">
        <div className="section3__cards">
          <CardService
            image="https://framerusercontent.com/images/upU2hH9n5X1Vj4wxoa5Yj95rKB0.png"
            alt="Extracción de mi muela del juicio"
            tag="Extracción de muelas del juicio"
            description="La extracción de muelas del juicio es un procedimiento común para remover una o más de las terceras molares, el último conjunto de dientes en salir."
          />
          <CardService
            image="https://framerusercontent.com/images/U8BGOQA1Nv68MugqazWIoEWPPI.png"
            alt="Contorneado dental"
            tag="Contorneado dental"
            description="El contorneado dental, también conocido como modelado de esmalte, es un procedimiento cosmético rápido e indoloro que da forma suavemente a mis dientes."
          />
        </div>

        <div className="section3__sidebar">
          <h4>Otros tratamientos</h4>
          <ul>
            <li>
              Mi higiene oral <IconArrowRight width={18} color="var(--black)" />
            </li>
            <li>
              Colocación de mis retenedores{" "}
              <IconArrowRight width={18} color="var(--black)" />
            </li>
            <li>
              Mi terapia periodontal{" "}
              <IconArrowRight width={18} color="var(--black)" />
            </li>
            <li>
              Mis selladores dentales{" "}
              <IconArrowRight width={18} color="var(--black)" />
            </li>
            <li>
              Mi odontología de emergencia{" "}
              <IconArrowRight width={18} color="var(--black)" />
            </li>
            <li>
              Mi cuidado preventivo{" "}
              <IconArrowRight width={18} color="var(--black)" />
            </li>
            <li>
              Mi odontología familiar{" "}
              <IconArrowRight width={18} color="var(--black)" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
