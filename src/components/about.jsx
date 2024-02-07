import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{props.data ? props.data.title : "loading..."}</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <a
                  href="#features"
                  className="btn btn-secondary btn-custom btn-lg page-scroll"
                >
                  {props.data ? props.data.cta : "Loading"}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
