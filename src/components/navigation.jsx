import React, { useState, useEffect } from "react";

export const Navigation = (props) => {
  const { goToPage } = props;
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [isMaxScroll, setIsMaxScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100; // Maximum scroll position where opacity is 1
      const opacity = Math.min(scrollY / maxScroll, 1); // Calculate opacity

      setScrollOpacity(opacity);
      setIsMaxScroll(scrollY >= maxScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect only runs once on mount

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${isMaxScroll ? "navbar-colored" : ""}`}
      style={{ backgroundColor: `rgba(0, 104, 102, ${scrollOpacity})` }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="/img/logo.png"
              alt="Puramente"
              className="navbar-brand-image"
            />
            <span className="first">Pura</span>
            <span className="second">mente</span>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="navigator page-scroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="navigator page-scroll">
                Sobre mi
              </a>
            </li>
            <li>
              <a href="#services" className="navigator page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="btn btn-primary btn-custom btn-lg page-scroll"
                onClick={() => goToPage()}
              >
                Agenda una cita
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
