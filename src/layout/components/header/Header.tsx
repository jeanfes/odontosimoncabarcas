import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconChevronBottom } from "../../../assets/icons/IconChevronBottom";
import LogoGold from "../../../assets/images/LogoGold.png";
import Button from "../../../components/button/Button";
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
      { root: null, threshold: 0 }
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

              <div
                className="dropdown-menu"
                role="menu"
                aria-label="All pages menu"
              >
                <ul>
                  <li role="menuitem" onClick={() => go("/")}>
                    Homepage
                  </li>
                  <li role="menuitem" onClick={() => go("/about")}>
                    About
                  </li>
                  <li role="menuitem" onClick={() => go("/service")}>
                    Service
                  </li>
                  <li role="menuitem" onClick={() => go("/service-details")}>
                    Service Details
                  </li>
                  <li role="menuitem" onClick={() => go("/reviews")}>
                    Reviews
                  </li>
                  <li role="menuitem" onClick={() => go("/give")}>
                    Give
                  </li>
                  <li role="menuitem" onClick={() => go("/doctor")}>
                    Doctor
                  </li>
                  <li role="menuitem" onClick={() => go("/doctor-details")}>
                    Doctor Details
                  </li>
                  <li role="menuitem" onClick={() => go("/appointment")}>
                    Appointment
                  </li>
                  <li role="menuitem" onClick={() => go("/contact")}>
                    Contact
                  </li>
                  <li role="menuitem" onClick={() => go("/404")}>
                    404
                  </li>
                </ul>
              </div>
            </div>

            <button
              className="nav__item"
              onClick={() => navigate("/services")}
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
