import React, { useState, useEffect } from "react";
import { getAllCountriesInfo, searchCountry, getOneCountry } from "../services/countriesServices";

import Country from './Country';
import Regionai from './Regionai';
import Onecountrymodal from "./Onecountrymodal";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [oneCountry, setOneCountry] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getData = () => {
    getAllCountriesInfo()
      .then(response => {
        setCountries(response);
        setFilteredCountry(response);
      });
  };

  const getSearchResult = (searchword) => {
    searchCountry(searchword).then(response => {
      if (response !== undefined) {
        setFilteredCountry(response);
      }
    });
  };

  const uniqueRegions = ['All', ...new Set(countries.map((oneRegion) => oneRegion.region))];

  const filterData = (region) => {
    if (region !== 'All') {
      const filtered = countries.filter((item) => item.region.includes(region));
      setFilteredCountry(filtered);
    } else {
      setFilteredCountry(countries);
    }
  };

  const getOneCountryInfo = (country) => {
    getOneCountry(country).then(response => {
      console.log(country, response);
      setOneCountry(response);
      handleShow();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Regionai uniqueRegions={uniqueRegions} filterData={filterData} searchCountry={getSearchResult} />
      <Country filteredCountry={filteredCountry} getOneCountryInfo={getOneCountryInfo} />
      <Onecountrymodal
        oneCountry={oneCountry}
        handleClose={handleClose}
        show={show}
      />
    </div>
  );
};

export default Main;
