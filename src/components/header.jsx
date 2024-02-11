import React from "react";

export const Header = (props) => {
  const { data, goToPage } = props;
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
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
          </div>
        </div>
      </div>
    </header>
  );
};
