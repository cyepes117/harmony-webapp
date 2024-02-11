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
            ? props.data.value.map((service, i) => (
                <div key={`${service.name}-${i}`} className="col-md-3">
                  <div className="card">
                    <img src={`/img/services/${service.icon}`} alt={service.name} />
                    <div className="service-desc">
                      <h3>{service.name}</h3>
                      <p>{service.text}</p>
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
