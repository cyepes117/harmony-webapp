import React from "react";

export const Header = (props) => {
  const { data, goToPage } = props;
  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row intro-content">
              <div className="col-xs-12 col-md-6">
                <div className="intro-text">
                  <h1>{data ? data.title : "loading..."}</h1>
                  <p>{data ? data.paragraph : "loading..."}</p>
                  <a
                    href="#home"
                    className="btn btn-custom btn-lg page-scroll"
                    onClick={() => goToPage()}
                  >
                    {data ? data.cta : "Loading"}
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-md-6">
                <div className="intro-img">
                  <img src="img/about.jpg" className="img-responsive" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
