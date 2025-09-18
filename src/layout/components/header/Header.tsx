import { IconChevronBottom } from "../../../assets/icons/IconChevronBottom";
import LogoGold from "../../../assets/images/LogoGold.png";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";
import "./header.scss";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrolled(!entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.3 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  const go = (path: string) => {
    navigate(path);
  };

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? "scrolled" : ""}`}
      role="banner"
    >
      <div className="header__inner">
        <img
          className="header__img"
          src={LogoGold}
          alt="Logo Simón Cabarcas"
          onClick={() => navigate("/")}
        />
        <nav className="header__nav" role="navigation" aria-label="Main">
          <div className="header__nav-left">
            <div className="nav__item nav__item--dropdown" tabIndex={0}>
              <button
                type="button"
                aria-haspopup="menu"
                aria-label="All pages"
                className="nav__trigger"
              >
                <span className="nav__label">TODO</span>
                <IconChevronBottom
                  width={18}
                  height={18}
                  color="currentColor"
                />
              </button>
              <div className="dropdown-menu-container">
                <div
                  className="dropdown-menu"
                  role="menu"
                  aria-label="All pages menu"
                >
                  <ul>
                    <li role="menuitem" onClick={() => go("/")}>
                      Inicio
                    </li>
                    <li role="menuitem" onClick={() => go("/acerca-de")}>
                      Acerca de
                    </li>
                    <li role="menuitem" onClick={() => go("/servicios")}>
                      Servicios
                    </li>
                    <li role="menuitem" onClick={() => go("/resenas")}>
                      Reseñas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              className="nav__item"
              onClick={() => navigate("/servicios")}
              aria-label="Services"
            >
              <span className="nav__label">SERVICIOS</span>
            </button>

            <Button
              text="AGENDAR UNA CITA"
              design="primary"
              onClick={() => navigate("/agenda-tu-cita")}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
