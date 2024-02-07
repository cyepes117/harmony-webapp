import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{props.data ? props.data.title : "loading..."}</h2>
          <p>{props.data ? props.data.paragraph : "loading..."}</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.value.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  <div className="card">
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
