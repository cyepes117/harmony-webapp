import React from "react";

export const Navigation = (props) => {
  const { goToPage } = props;
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
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
            Puramente
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="navigator page-scroll">
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
