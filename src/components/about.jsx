import React from "react";

export const About = (props) => {
  const { data, goToPage } = props;

  if (!props.data) {
    return <div>Loading...</div>;
  }

  // Replace newline characters ('\n') with JSX line breaks (<br />)
  const parsedParagraph = data.paragraph.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-img">
              <img src="img/about.png" className="img-responsive" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{data ? data.title : "Loading"}</h2>
              {/* Render the parsed paragraph with JSX line breaks */}
              <p>{parsedParagraph}</p>
              <a
                href="#about"
                className="btn btn-secondary btn-custom btn-lg page-scroll"
                onClick={() => goToPage()}
              >
                {data ? data.cta : "Loading"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
