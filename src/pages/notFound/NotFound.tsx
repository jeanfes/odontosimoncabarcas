import { useNavigate } from "react-router-dom";
import "./notFound.scss";
import Button from "../../components/button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <h1 className="not-found__title">PAGINA NO ENCONTRADA</h1>
      <div className="not-found__code">
        <span>4</span>
        <span>O</span>
        <span>4</span>
      </div>
      <h2 className="not-found__subtitle">PAGINA NO ENCONTRADA</h2>
      <Button
        onClick={() => navigate("/")}
        text="VOLVER A INICIO"
        design="white"
      />
    </section>
  );
};

export default NotFound;
