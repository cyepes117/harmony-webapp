import React from "react";

export const Contact = (props) => {

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="section-title">
                <h2>Novedades</h2>
                <p>
                  Información de valor que debes de conocer.
                </p>
                <a
                  href="#features"
                  className="btn btn-tertiary btn-custom btn-lg page-scroll"
                >
                  {props.data ? props.data.cta : "Loading"}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Todos los derechos reservados. Puramente.
          </p>
        </div>
      </div>
    </div>
  );
};
