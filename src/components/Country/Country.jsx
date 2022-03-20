import React from "react";

const Country = (props) => {
  const { data } = props;
  const { flags, population, region, name } = data;
  // console.log(data);
  return (
    <div className="col">
      <div className="card h-100  border-0 shadow rounded-3">
        <div className="card-body">
          <img
            src={flags.png}
            className="card-img-top img-fluid py-3"
            alt={name.common}
          ></img>
          <h5 className="card-title">{name.common}</h5>
          <p className="card-text">
            {name.common} has {population} of population. This country is under{" "}
            {region}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
