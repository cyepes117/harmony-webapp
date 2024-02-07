import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 intro-text">
                <div className="">
                  <h1>{props.data ? props.data.title : "loading..."}</h1>
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    {props.data ? props.data.cta : "Loading"}
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-md-6 intro-text">
                <img src="img/about.jpg" className="img-responsive" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
