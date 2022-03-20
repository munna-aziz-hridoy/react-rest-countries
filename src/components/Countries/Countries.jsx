import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all/");
      const data = await res.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <h5 className="text-secondary py-4">Countries</h5>
        <h6 className="text-primary py-1">
          Available Countries: {countries.length}
        </h6>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
        {countries.map((country) => (
          <Country data={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
