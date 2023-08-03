"use client";
import { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";
import Search from "../../components/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [city, setCity] = useState("são%20paulo");
  const [data, setData] = useState();
  const [forecast, setForecast] = useState();
  const [unit, setUnit] = useState("metric");
  const [errorMessage, setErrorMessage] = useState(null);

  const KEY = "ae9bb8d429f61293e2d0cc73c650b947";

  useEffect(() => {
    const CURRENTAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${unit}`;
    const FORECASTAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=${unit}`;

    async function getData(link, setState) {
      try {
        const response = await fetch(link);
        const json = await response.json();
        if (json.cod === "404") {
          throw new Error(json.message);
        }
        setState(json);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }

    getData(CURRENTAPI, setData);
    getData(FORECASTAPI, setForecast);
  }, [city, unit]);

  return (
    <div id="content">
      <div id="container_1">
        <Search
          onCitySelect={setCity}
          currentCity={city}
          errorMessage={errorMessage}
        />
        <Sidebar data={data} unit={unit} setUnit={setUnit} />
      </div>
      <div id="container_2">
        <Main data={data} forecast={forecast} unit={unit} setUnit={setUnit} />
      </div>
    </div>
  );
}